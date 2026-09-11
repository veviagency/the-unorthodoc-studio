# Apparel görseli + konu seçiminde sayfa başına atlamama

## 1. Apparel için gerçek ürün görseli

Şu an e-book ve planner kartlarında orijinal mağazadaki kapaklar var; tişört ise tipografik bir yedek kutu olarak görünüyor.

- theunorthodoc.com/apparel sayfasındaki resmi "Contrary To What Is Usual" triblend tişört görseli indirilecek, `src/assets/products/triblend-unisex-tee.webp` olarak eklenecek.
- Ürün görsel eşlemesine tişört de eklenecek; böylece Shop listesi ve ürün detay sayfası diğer ürünlerle aynı ivory çerçeve + kırpmasız (contain) sunumu kullanacak.
- Görsel netliği düşükse ya da sayfadan alınamazsa, mevcut premium çerçeveyi koruyup en yüksek çözünürlüklü sürümü kullanacağım; uydurma bir görsel üretilmeyecek.
- Ana sayfadaki "Practical resources" üçlüsü değişmiyor — apparel yalnızca Shop'ta kalıyor.

## 2. Konu/koleksiyon seçiminde kaydırma konumu korunacak

Journal'da bir alt konuya tıklandığında sayfa en başa atlıyor. Filtre yalnızca listeyi değiştirdiği için bu gereksiz.

- Journal filtre çipleri (All writing + konular) tıklandığında kaydırma konumu olduğu yerde kalacak.
- Aynı davranış Shop koleksiyon çiplerine de uygulanacak (tutarlılık için).
- Sayfalar arası normal gezinme (menü, kartlar, pillar linkleri) eskisi gibi sayfa başına dönmeye devam edecek.

## Teknik notlar

- `src/lib/site-data.ts`: `productImages` içine tee kaydı.
- `src/components/page-kit.tsx` değişmeden çalışır (görsel varsa foto yolunu kullanıyor).
- `src/routes/journal.tsx` ve `src/routes/shop.index.tsx`: filtre `Link`'lerine `resetScroll={false}`.

## Doğrulama

- 1440px ve 390px: konu değiştirince kaydırma konumu korunuyor mu, filtre aktif durumu doğru mu.
- Shop listesi ve tişört detay sayfasında görselin kırpılmadan, diğer kapaklarla aynı ritimde durduğu kontrol edilecek.
- Yatay kaydırma yok, typecheck + build.
