# Read Menüsünden Boş Konuları Kaldırma

## Problem
Read dropdown'ında **Motherhood** ve **Side Hustle** bağlantıları var ama bu konularda hiç makale yok. Tıklayan kullanıcı boş bir "no posts yet" sayfasına düşüyor — bu siteye yarım kalmış hissi veriyor.

## Önerilen çözüm
İçeriği olmayan konuları gizle; içerik geldiğinde tek satırla geri aç.

1. **Navigasyon (Read dropdown)** — `src/lib/site-data.ts` içinde `navGroups` altındaki Read listesi, yalnızca makalesi olan konuları gösterecek şekilde güncellenecek: The Journal, Personal Development, Professional & Financial Growth, Oral Care & Smile Health.
2. **Journal sayfası filtre çubuğu** — aynı şekilde, makalesi olmayan topic çipleri gizlenecek. Böylece menü ve sayfa her zaman tutarlı olur.
3. **Teknik yaklaşım** — `journalTopics` verisi silinmeyecek; her topic'e göster/gizle bilgisi eklenecek veya `articles` sayısına göre otomatik filtrelenecek. Motherhood/Side Hustle için yazı eklendiğinde otomatik olarak yeniden görünürler (makale sayısına göre filtreleme yapılırsa ekstra işlem gerekmez).
4. **Footer / pillar kartlar** — sitede bu konulara link veren başka yer (ör. Journal sayfasındaki "Live Well" pillar kartı `personal-development`'a gidiyor, kontrol edilecek) boş konuya yönleniyorsa dolu bir konuya bağlanacak.

## Alternatif (istemediğiniz sürece yapılmayacak)
Boş konuları menüde tutup sayfada "Yakında — bu konudaki ilk yazı The Climb'de duyurulacak" gibi bir durum göstermek. Tavsiye etmiyorum: menüde vaat edilip sayfada teslim edilmeyen her bağlantı güveni azaltıyor.

## Doğrulama
- Desktop hover + klavye (Enter/Space/Escape) menü davranışının değişmediği kontrol edilecek.
- 390px mobil menüde accordion kontrolü.
- `/journal?topic=motherhood` gibi eski linkler elle girilirse sayfa yine çalışır (boş-durum mesajı korunur).
- Typecheck + build.
