# Journal: Featured kutusunu kaldır ve yazı listesini premium düzenle

## Amaç
Journal sayfasındaki hero içindeki "Featured" kutusu kaldırılacak; altındaki "All writing" yazı listesi daha sakin, premium ve okunabilir hale getirilecek.

## Değişiklikler

### 1. `src/routes/journal.tsx`
- `ArrowRight` importunu kaldır (artık featured CTA'da kullanılmayacak).
- `featured = articles.find((a) => a.featured)` değişkenini ve `journal-feature` bağlantı bloğunu sil.
- Hero'yu tek sütunlu, kompakt bir editorial başlığa indirge:
  - eyebrow + h1 + kısa intro.
  - `journal-hero-grid` iki sütunlu grid yerine tek sütun düzen.
- "All writing" listesi:
  - Her satırda: kategori · tarih, başlık, excerpt.
  - Liste öğelerini tıklanabilir bağlantı yap (`article` → `Link`/`a`), böylece mobilde satırın tamamına dokunulabiliyor.
  - Aktif filtrede boş state metni korunur.

### 2. `src/styles.css`
- `.journal-hero` / `.journal-hero-grid`:
  - Mobil ve masaüstünde tek sütunlu, daha az padding.
  - `journal-feature` ile ilgili stilleri temizle (`.journal-feature`, `.journal-feature-cta`).
- `.editorial-list` / `.editorial-row`:
  - Satırlar arası daha nazik boşluk (padding artır, border ince).
  - Kategori/tarih `.eyebrow` için daha soluk ve küçük bir stil.
  - Başlık font ağırlığı/hattı ayarla, excerpt rengi `muted-foreground` korunur.
  - Hover/focus durumunda hafif arka plan kayması veya sola kayma efekti.
  - Mobil: başlık ve excerpt okunabilirliği için line-height ve font-size ayarı; satır yüksekliği en az 44px dokunma alanı.
- `.topic-filter` ile `.editorial-list` arasındaki boşluğu dengele.

## Doğrulama
- `/journal` sayfası 1440px ve 390px'te kontrol: featured kutu gitmiş, hero dengeli, liste premium ve okunaklı.
- Yatay kaydırma yok, konsol hatası yok.
- `bunx tsgo --noEmit` ve build temiz.
