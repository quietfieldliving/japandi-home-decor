# Pinterest画像の作り方（Windows初心者向け）

このフォルダは、Pinterestに投稿する**縦長画像（1000 × 1500px）を5枚**作るための道具です。

デザインはHTMLファイル（`pin-01.html` 〜 `pin-05.html`）に書いてあります。
コマンドを2つ実行すると、それが**PNG画像**になって `images` フォルダに出てきます。

---

## できあがる画像

| ファイル | 内容 |
|----------|------|
| `images/pin-01.png` | The 3 Best Shoji Floor Lamps（比較ガイド） |
| `images/pin-02.png` | Best Japandi Floor Lamps（ランプ1本を大きく） |
| `images/pin-03.png` | Which Shoji Lamp Fits Your Home?（選び方） |
| `images/pin-04.png` | Minimal Japanese Lighting Ideas（和のリビング） |
| `images/pin-05.png` | Warm Japanese Home Decor（夜の暖かい部屋） |

> **すでに5枚とも作成済みです。** 下の手順は「作り直したいとき」に使います。
> （文字やデザインを変えたあとに、もう一度画像にしたいとき）

---

## 準備：Node.js を入れる（最初の1回だけ）

このツールは「Node.js」というソフトを使います。まだ入っていない場合：

1. [https://nodejs.org](https://nodejs.org) を開く
2. 左側の **「LTS」** と書かれた大きなボタンをクリックしてダウンロード
3. ダウンロードしたファイルをダブルクリック
4. 「Next」を押していくだけでインストール完了
5. **パソコンを再起動**する

---

## 手順（画像を作り直すとき）

### ① ターミナルを開く

- キーボードの **Windowsキー** を押す
- `powershell` と入力する
- 出てきた **「Windows PowerShell」** をクリック

黒い画面（または青い画面）が開きます。これが「ターミナル」です。

### ② pinterestフォルダへ移動する

下の1行をコピーして、黒い画面に貼り付けて **Enter** を押します。
（貼り付けは、黒い画面の中で**右クリック**すればOK）

```bash
cd "$env:USERPROFILE\OneDrive\ドキュメント\GitHub\japandi-home-decor\pinterest"
```

### ③ 必要な部品を入れる（最初の1回だけ）

```bash
npm install
```

数分かかります。文字がたくさん流れますが、**そのまま待ってください**。
終わったら次へ進みます。

### ④ 画像を作る

```bash
npm run export
```

「書き出しました: images/pin-01.png」のような文字が5回出れば成功です。

### ⑤ imagesフォルダを見る

`japandi-home-decor` の中の **`images`** フォルダを開いてください。

```
images/
├── pin-01.png
├── pin-02.png
├── pin-03.png
├── pin-04.png
└── pin-05.png
```

この5枚がPinterestに投稿する画像です。

---

## デザインを変えたいとき

- **文字を変える** → `pin-01.html` 〜 `pin-05.html` をメモ帳で開いて書きかえる
- **色や大きさを変える** → `pin-styles.css` を開いて書きかえる

変えたあとは、もう一度 **④ `npm run export`** を実行すれば画像に反映されます。

---

## こまったときは

| 症状 | 対処 |
|------|------|
| `npm` が見つからないと出る | Node.js が入っていません。上の「準備」を見てください |
| `cd` でエラーが出る | フォルダの場所が違います。フォルダを右クリック →「パスのコピー」で確認 |
| 画像が真っ白 | もう一度 `npm run export` を実行してください |

---

## 使っている素材について

画像はすべて**CSS（図形とグラデーション）だけ**で描いています。

- 外部の商品画像・Amazonの画像は**使っていません**
- Amazonのロゴは**使っていません**
- 価格・割引率・評価数は画像に**入れていません**

そのため著作権の心配なくPinterestに投稿できます。
