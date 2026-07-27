/**
 * export-pins.js
 * pin-01.html 〜 pin-05.html を 1000 × 1500px のPNGに書き出します。
 *
 * 使い方（pinterest フォルダの中で）:
 *   npm install
 *   npm run export
 *
 * 書き出し先: ../images/pin-01.png 〜 pin-05.png
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const WIDTH = 1000;
const HEIGHT = 1500;
const PINS = ['pin-01', 'pin-02', 'pin-03', 'pin-04', 'pin-05'];

// 書き出し先（リポジトリ直下の images フォルダ）
const OUT_DIR = path.join(__dirname, '..', 'images');

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log('ブラウザを起動しています...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 1,
  });

  for (const name of PINS) {
    const htmlPath = path.join(__dirname, `${name}.html`);

    if (!fs.existsSync(htmlPath)) {
      console.warn(`スキップ: ${name}.html が見つかりません`);
      continue;
    }

    const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');

    // Googleフォントの読み込みを待つ（ネットが無い場合も進みます）
    try {
      await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });
    } catch (e) {
      await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
    }

    try {
      await page.evaluate(() => document.fonts.ready);
    } catch (e) {
      /* フォント待ちに失敗しても書き出しは続行します */
    }

    const outPath = path.join(OUT_DIR, `${name}.png`);
    await page.screenshot({
      path: outPath,
      clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT },
    });

    console.log(`書き出しました: images/${name}.png  (${WIDTH} x ${HEIGHT})`);
  }

  await browser.close();
  console.log('\n完了しました。images フォルダを見てください。');
})().catch((err) => {
  console.error('\nエラーが発生しました:');
  console.error(err.message);
  process.exit(1);
});
