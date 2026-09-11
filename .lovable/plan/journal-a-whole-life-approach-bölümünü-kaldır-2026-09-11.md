# Journal: "A whole-life approach" bölümünü kaldır

## Amaç
Journal sayfasının altındaki üç pillar kartı (Live Well / Build Well / Care Well) yalnızca `/journal?topic=...` linkine gidiyor; üstteki konu filtreleriyle aynı işi yapıyor ve sayfayı başa alıyor. Bölüm tamamen kaldırılacak.

## Değişiklikler
1. `src/routes/journal.tsx`
   - "The editorial lens / A whole-life approach." bölümünü (section-muted blok, ~67–75. satırlar) sil.
   - Kullanılmayan `pillars` import'unu temizle (`activeJournalTopics`, `articles`, `journalTopics` kalır).
2. `src/lib/site-data.ts`
   - `pillars` dizisi başka yerde kullanılmıyorsa tanımını kaldır; kullanılıyorsa (ör. ana sayfa) dokunma.
3. Stiller
   - `.pillar-grid` / `.pillar-card` CSS'i başka sayfada kullanılmıyorsa temizle; kullanılıyorsa bırak.

## Doğrulama
- Journal sayfası 1440px ve 390px'te kontrol: bölüm gitmiş, hero + filtre + yazı listesi bozulmadan çalışıyor.
- Yatay kaydırma yok, konsol hatası yok.
- `bunx tsgo --noEmit` ve build temiz.
