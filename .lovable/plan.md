# Küçük düzeltme paketi

## 1. Footer'dan "Press" bağlantısını kaldır
`src/components/site-chrome.tsx` içindeki Collaborate sütununda, Media Kit Request ile aynı yere giden "Press" bağlantısı siliniyor. Strategic Partnerships, Media Kit Request ve Work With Dr. Patrice kalıyor.

## 2. Ana sayfadaki yazı satırlarındaki kayan çizgi (masaüstü)
Ana sayfa "Ideas worth sitting with" listesindeki her yazı bağlantısı satır içi (inline) davrandığı için üstündeki ince ayraç çizgisi kayıyor ve metnin üzerine biniyor. Bu kartlar blok düzene alınarak çizgi her zaman tarih satırının üstünde, tam genişlikte duracak. Mobil görünüm zaten doğru; orada bir değişiklik olmayacak.

## 3. Hafif hover kayması nerelere eklenecek
Journal listesindeki satırlarda kullanılan sakin hover hareketi, aynı ritimdeki diğer metin tabanlı liste bağlantılarına da eklenecek:
- Ana sayfa yazı satırları (Ideas worth sitting with)
- Ürün kartları (Shop ve ana sayfa) için sadece çok hafif bir opaklık/kayma
Görsel ağırlığı olan büyük bloklar (koyu featured kart, portreler, membership kartı) değiştirilmeyecek. Efekt dokunmatik cihazlarda devre dışı kalacak ve `prefers-reduced-motion` tercihine saygı gösterecek.

## Teknik notlar
- `src/components/site-chrome.tsx`: footer Press `<Link>` kaldırılır.
- `src/styles.css`: `.article-card` için `display:block` (kart içi boşluklar korunarak); `.article-card`/`.product-card` için `transition` + `:hover` içinde küçük `padding-left`/`transform` kayması, `@media(hover:hover)` içinde; `prefers-reduced-motion: reduce` altında kapatılır.

## Doğrulama
- 1440px ve 390px'te ana sayfa, Journal ve Shop kontrolü: çizgi binmesi yok, yatay kaydırma yok, konsol hatası yok.
- Typecheck ve build temiz.
