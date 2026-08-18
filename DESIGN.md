---
name: Cinematic Visionary
colors:
  surface: '#111417'
  surface-dim: '#111417'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#191c1f'
  surface-container: '#1d2023'
  surface-container-high: '#282a2e'
  surface-container-highest: '#323539'
  on-surface: '#e1e2e7'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e1e2e7'
  inverse-on-surface: '#2e3134'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#d2bbff'
  on-secondary: '#3f008e'
  secondary-container: '#6001d1'
  on-secondary-container: '#c9aeff'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#0f69dc'
  on-tertiary-container: '#edf0ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#111417'
  on-background: '#e1e2e7'
  surface-variant: '#323539'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 76px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style

Bu tasarım sistemi, Melissa Production & Organization'ın prestijli ve vizyoner kimliğini yansıtmak üzere "Cinematic Editorial" ve "Premium Corporate" estetiklerinin birleşimiyle kurgulanmıştır. Hedef kitle, yüksek profilli etkinlik sahipleri, sanatçılar ve kurumsal organizatörlerdir.

Kullanıcı arayüzü, sahne ışıklarının karanlık bir atmosferdeki derinliğini andıran, güven veren ve ilham verici bir duygusal tepki uyandırmayı hedefler. Tasarım dili **Glassmorphism** ve **Minimalism** akımlarından beslenir; derinlik hissi veren katmanlar, geniş beyaz alanlar (whitespace) ve kristal netliğinde tipografi ile lüks bir deneyim sunar.

## Renkler

Renk paleti, derin bir gece atmosferini temsil eden neredeyse siyah bir lacivert (`#05070A`) üzerine kurgulanmıştır. Bu temel, premium içeriğin ve görsellerin öne çıkmasını sağlar.

- **Primary & Secondary:** Royal Blue ve Rich Purple, markanın dinamizmini ve yaratıcılığını temsil eder. Bu iki renk genellikle degrade (gradient) geçişlerinde birleşerek sahne aydınlatması hissi yaratır.
- **Accents:** Electric Blue ve Soft Lavender, interaktif öğelerde ve görsel vurgularda derinlik kazandırmak için kullanılır.
- **Uygulama:** Arka plan her zaman en koyu tonda tutulmalı, kartlar ve modallar çok düşük opaklıklı beyaz veya morumsu dolgularla (Glassmorphism) ayrıştırılmalıdır.

## Tipografi

Tipografi hiyerarşisi, editoryal bir dergi düzenini andıracak şekilde tasarlanmıştır.

- **Başlıklar (Montserrat):** Büyük, cesur ve otoriter. Geniş izleme (tracking) ve dar satır aralığı (leading) kullanılarak "Cinematic" bir etki yaratılır. Display fontlar özellikle ana sayfa karşılamalarında (Hero section) tercih edilmelidir.
- **Gövde Metni (Inter):** Okunabilirlik ön plandadır. Metin bloklarında `text_secondary` rengi kullanılarak göz yorgunluğu önlenir ve hiyerarşi desteklenir.
- **Etiketler:** Teknik detaylar ve kategori isimleri için her zaman büyük harf (uppercase) ve geniş harf arası boşluk tercih edilmelidir.

## Yerleşim ve Boşluklar

Tasarım sistemi "Loose Vertical Rhythm" (Gevşek Dikey Ritim) felsefesini benimser. İçerikler arasında nefes alacak geniş alanlar bırakılmalıdır.

- **Grid Sistemi:** 12 sütunlu akışkan bir grid kullanılır. Masaüstünde 1280px maksimum genişlik hedeflenir.
- **Bölümler:** Sayfa bölümleri (Sections) arasındaki dikey boşluklar, içeriğin kalitesini vurgulamak adına standartların üzerinde tutulur (120px+).
- **Adaptasyon:** Mobil cihazlarda kenar boşlukları 20px'e çekilirken, dikey boşluklar yaklaşık %50 oranında daraltılır.

## Derinlik ve Katmanlar

Bu tasarım sisteminde derinlik, gölgelerden ziyade ışık ve geçirgenlik ile sağlanır.

- **Glassmorphism:** Yüzeyler `%5` ile `%10` arası opaklığa sahip beyaz dolgular ve `20px` ile `40px` arası Backdrop Blur (arka plan bulanıklığı) kullanılarak oluşturulur.
- **Kenar Çizgileri (Borders):** Kartlar ve container'lar, `%15` opaklıkta beyaz veya ikincil renk (purple) tonlarında çok ince (1px) çizgilerle sınırlanır.
- **Işık Etkisi:** Sayfanın belirli köşelerinde veya arka planda, birincil ve ikincil renklerin kullanıldığı çok yumuşak, geniş odaklı "Glow" (parlama) efektleri katmanlar arasına yerleştirilerek derinlik artırılır.

## Formlar

Tasarım dili modern ve davetkar bir his için yumuşak köşeleri benimser.

- **Standart Bileşenler:** Butonlar ve giriş alanları `8px` (rounded) köşe keskinliğine sahiptir.
- **Kartlar ve Konteynerler:** Büyük içerik blokları ve görseller `16px` ile `24px` (rounded-lg/xl) arasında değişen radius değerleri ile yumuşatılır.
- **Medya:** Fotoğraflar ve videolar her zaman yuvarlatılmış köşelerle sunulmalı, keskin hatlardan kaçınılmalıdır.

## Bileşenler

- **Butonlar:** Ana aksiyon butonları (`Primary`), `Royal Blue`dan `Rich Purple`a uzanan lineer bir degradeye sahip olmalıdır. Metinler kalın ve okunaklıdır. `Secondary` butonlar ise sadece ince bir stroke ve cam efekti ile tasarlanmalıdır.
- **Kartlar (Glass Cards):** Etkinlik veya hizmet kartları, hafif transparan bir dolguya ve hover durumunda parlayan ince bir sınıra (border) sahip olmalıdır.
- **Giriş Alanları (Inputs):** Koyu arka plan üzerinde, düşük opaklıklı dolgu ve odaklanıldığında (focus) `Electric Blue` rengine dönen alt çizgiler veya kenarlıklar kullanılır.
- **Çipler (Chips/Badges):** Etkinlik kategorileri (örn: "Live Concert", "Gala") için Soft Lavender dolgulu, koyu metinli veya tam tersi kontrastlı küçük kapsüller kullanılır.
- **Navigasyon:** Sayfa kaydırıldığında üst bar (Header), içeriği arkasında bulanıklaştıran (Blur) cam efektiyle sabitlenmelidir.