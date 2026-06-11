# Zerafet Restaurant

Modern bir restoran/kafe için hazırlanmış responsive referans web sitesi. Proje; ana sayfa, menü, hakkımızda ve iletişim sayfalarından oluşur. HTML, CSS ve vanilla JavaScript ile geliştirilmiştir.

## Repository

[GitHub repository](https://github.com/tastanegemen/Zerafet-Restaurant)

## Ekran Görüntüsü

![Zerafet website preview](screenshot.png)

## Özellikler

- Masaüstü, tablet ve mobil ekranlara uyumlu responsive tasarım
- Restoran atmosferini öne çıkaran büyük hero alanı
- Öne çıkan yemekler, marka hikayesi ve mekan bölümleri
- `data/menu.json` üzerinden beslenen dinamik menü sayfası
- Lokal dosya önizlemesi için JavaScript fallback menü verisi
- Sabit WhatsApp rezervasyon butonu
- Çerez bildirimi
- Rezervasyon odaklı iletişim sayfası ve harita alanı
- Hakkımızda sayfası, şef bölümü ve restoran değerleri

## Proje Yapısı

```text
.
|-- about.html
|-- contact.html
|-- index.html
|-- menu.html
|-- screenshot.png
|-- css/
|   `-- style.css
|-- data/
|   `-- menu.json
|-- images/
|   `-- ...
`-- js/
    |-- main.js
    `-- menu.js
```

## Teknolojiler

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts

Herhangi bir build adımı veya paket yöneticisi gerekmez.

## Lokal Çalıştırma

Menü verisi JSON dosyasından yüklendiği için lokal server ile çalıştırılması önerilir.

```bash
python -m http.server 4175
```

Then open:

```text
http://127.0.0.1:4175/index.html
```

Sayfalar doğrudan dosya olarak da açılabilir. Bu durumda menü sayfası `js/menu.js` içindeki fallback veriyi kullanır.

## Sayfalar

- `index.html` - Ana sayfa
- `menu.html` - Dinamik restoran menüsü
- `about.html` - Restoran hikayesi ve şef profili
- `contact.html` - Rezervasyon ve iletişim sayfası

## Özelleştirme

Menü öğeleri şu dosyadan düzenlenebilir:

```text
data/menu.json
```

Site doğrudan `file://` ile de önizlenecekse `js/menu.js` içindeki fallback menü verisini JSON dosyasıyla senkron tutun.

WhatsApp rezervasyon linki şu dosyada tanımlıdır:

```text
js/main.js
```

`wa.me` URL'sini bulup telefon numarası ve mesaj metnini kendi rezervasyon bilgilerinizle değiştirebilirsiniz.

Ana renkler, tipografi, boşluklar ve responsive kurallar şu dosyada yer alır:

```text
css/style.css
```

## Notlar

Bu proje statik bir frontend referans sitesidir. Form gönderimi, rezervasyon yönetimi, CMS düzenleme ve online ödeme akışları varsayılan olarak bir backend'e bağlı değildir.
