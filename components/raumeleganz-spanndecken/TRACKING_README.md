# 📊 Google Analytics & Ads Integration

Vollständige DSGVO-konforme Integration von Google Analytics (Universal Analytics) und Google Ads mit Cookie-Consent-Management.

---

## 🚀 Setup-Anleitung

### 1. **Google Analytics & Ads IDs eintragen**

Öffnen Sie die Datei `src/lib/tracking.ts` und ersetzen Sie die Platzhalter mit Ihren echten IDs:

```typescript
export const GA_MEASUREMENT_ID = 'UA-XXXXXXXXX-X'; // ← Ihre Google Analytics ID
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXX';      // ← Ihre Google Ads ID
export const GOOGLE_ADS_CONVERSION_LABEL = 'XXXXX'; // ← Ihr Conversion Label
```

**Wo finde ich diese IDs?**

- **Google Analytics ID**: Google Analytics → Verwaltung → Property → Tracking-Informationen → Tracking-Code
- **Google Ads ID**: Google Ads → Tools → Conversions → Tag-Details
- **Conversion Label**: Google Ads → Tools → Conversions → Conversion-Aktion → Tag-Einrichtung

---

## 📂 Dateistruktur

```
src/
├── lib/
│   └── tracking.ts              # Haupt-Tracking-Library
├── components/
│   ├── CookieBanner.tsx         # Cookie-Banner mit Consent-Management
│   └── TrackingManager.tsx      # Automatische Tracking-Initialisierung
└── app/
    ├── layout.tsx               # Root Layout (inkl. TrackingManager)
    └── datenschutz/page.tsx     # Datenschutzerklärung (erweitert)
```

---

## 🎯 Verwendung

### **Automatisches Page-View-Tracking**

✅ **Bereits aktiviert!** Das Page-View-Tracking erfolgt automatisch auf allen Seiten durch den `TrackingManager`.

---

### **Custom Event Tracking**

Importieren Sie die `trackEvent` Funktion und verwenden Sie sie in Ihren Komponenten:

```typescript
import { trackEvent } from '@/lib/tracking';

// Beispiel: Button-Click tracken
const handleButtonClick = () => {
  trackEvent('button_click', 'engagement', 'CTA Button', 1);
};

// Beispiel: PDF-Download tracken
const handleDownload = () => {
  trackEvent('file_download', 'downloads', 'Preisliste PDF');
};
```

**Parameter:**
- `action`: Was ist passiert? (z.B. "button_click", "form_submit")
- `category`: In welcher Kategorie? (z.B. "engagement", "conversions")
- `label` (optional): Zusätzliche Info (z.B. "CTA Button", "Newsletter Form")
- `value` (optional): Numerischer Wert (z.B. 1, 100)

---

### **Conversion Tracking (Google Ads)**

Für wichtige Aktionen wie Formular-Absendungen:

```typescript
import { trackConversion } from '@/lib/tracking';

// Standard-Conversion (verwendet GOOGLE_ADS_CONVERSION_LABEL)
const handleFormSubmit = () => {
  trackConversion();
};

// Conversion mit spezifischem Label
const handlePurchase = () => {
  trackConversion('purchase_label_xyz');
};
```

---

## 💡 Praktische Beispiele

### **Beispiel 1: Kontaktformular-Tracking**

```typescript
'use client';

import { useState } from 'react';
import { trackEvent, trackConversion } from '@/lib/tracking';

export default function KontaktForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Formular absenden (Ihre Logik)
    // ...

    // Event tracken
    trackEvent('form_submit', 'conversions', 'Kontaktformular');

    // Conversion tracken
    trackConversion();

    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Ihre Formular-Felder */}
    </form>
  );
}
```

---

### **Beispiel 2: Telefon-Link-Tracking**

```typescript
import { trackEvent } from '@/lib/tracking';

export default function PhoneLink() {
  const handlePhoneClick = () => {
    trackEvent('phone_call', 'conversions', 'Header Telefon-Link');
  };

  return (
    <a 
      href="tel:+491234567890" 
      onClick={handlePhoneClick}
      className="..."
    >
      +49 123 456 7890
    </a>
  );
}
```

---

### **Beispiel 3: Service-Card-Click-Tracking**

```typescript
import { trackEvent } from '@/lib/tracking';
import Link from 'next/link';

export default function ServiceCard({ title, slug }: { title: string; slug: string }) {
  const handleClick = () => {
    trackEvent('service_click', 'engagement', title);
  };

  return (
    <Link href={`/leistungen/${slug}`} onClick={handleClick}>
      <div className="...">
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
```

---

## 🔒 Datenschutz & DSGVO

✅ **IP-Anonymisierung aktiviert** (`anonymize_ip: true`)  
✅ **Consent-basiertes Laden** (Scripts werden NUR geladen, wenn Nutzer zustimmt)  
✅ **Cookie-Banner** mit vollständiger Transparenz  
✅ **Opt-Out-Möglichkeit** jederzeit über Footer  
✅ **Datenschutzerklärung** vollständig erweitert

---

## 🛠️ Erweiterte Konfiguration

### **Tracking deaktivieren (für Entwicklung)**

Fügen Sie in `src/lib/tracking.ts` eine Umgebungsvariablen-Prüfung hinzu:

```typescript
export const initializeTracking = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Tracking] Disabled in development');
    return;
  }
  // ... rest of the code
};
```

### **Custom Cookie-Domain**

Falls Ihre Website auf Subdomains läuft:

```typescript
gtag('config', GA_MEASUREMENT_ID, {
  anonymize_ip: true,
  cookie_domain: 'auto', // oder '.example.com'
  cookie_flags: 'SameSite=None;Secure'
});
```

---

## 🧪 Testing

### **Prüfen, ob Tracking funktioniert:**

1. Öffnen Sie Ihre Website
2. DevTools öffnen (F12) → Console
3. Cookie-Banner: "Alle akzeptieren"
4. Console sollte zeigen:
   ```
   [Tracking] Loading Google Analytics...
   [Tracking] Google Analytics loaded
   [Tracking] Loading Google Ads...
   [Tracking] Google Ads configured
   ```

### **Google Analytics in Echtzeit prüfen:**

1. Google Analytics → Berichte → Echtzeit
2. Navigieren Sie auf Ihrer Website
3. Sie sollten als aktiver Nutzer erscheinen

### **Google Ads Conversion prüfen:**

1. Google Ads → Tools → Conversions
2. Wählen Sie Ihre Conversion-Aktion
3. Klicken Sie auf "Tag testen"
4. Formular auf Ihrer Website absenden
5. Status sollte "Tag funktioniert" zeigen

---

## 🎨 Cookie-Banner anpassen

Der Cookie-Banner befindet sich in `src/components/CookieBanner.tsx`.

**Farben ändern:**
- Analytics: `from-blue-100 to-indigo-100` (Zeile 202)
- Marketing: `from-purple-100 to-pink-100` (Zeile 240)

**Texte ändern:**
- Erste Ebene: Zeile 318-322
- Analytics-Beschreibung: Zeile 225-227
- Marketing-Beschreibung: Zeile 263-265

---

## 📋 Cookie-Liste

Die vollständige Cookie-Liste mit allen Details finden Sie in der Datenschutzerklärung unter `/datenschutz`.

**Cookies von Google Analytics:**
- `_ga`: Haupt-Cookie (2 Jahre)
- `_gid`: Session-Cookie (24 Stunden)
- `_gat`: Rate-Limiting (1 Minute)

**Cookies von Google Ads:**
- `_gcl_au`: Conversion-Zuordnung (90 Tage)
- `_gcl_aw`: Conversion-Tracking (90 Tage)

---

## ❓ Häufige Fragen

### **Tracking funktioniert nicht?**

1. Prüfen Sie, ob die IDs korrekt eingetragen sind
2. Browser-Cache leeren
3. DevTools Console auf Fehler prüfen
4. Cookie-Einstellungen zurücksetzen (Footer → "Cookie-Einstellungen")

### **Alte Tracking-Codes entfernen**

Falls Sie bereits ein anderes Tracking-System hatten:
1. Suchen Sie nach `<script>` Tags im `layout.tsx`
2. Entfernen Sie alle manuell eingefügten Analytics-Scripts
3. Nutzen Sie ausschließlich die neue `tracking.ts` Library

### **Google Analytics 4 (GA4) statt Universal Analytics?**

Ändern Sie in `src/lib/tracking.ts`:

```typescript
// Statt:
export const GA_MEASUREMENT_ID = 'UA-XXXXXXXXX-X';

// Verwenden Sie:
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
```

---

## 🚀 Support

Bei Fragen oder Problemen:
1. DevTools Console prüfen
2. Network-Tab → Filter "google" → Requests prüfen
3. Google Tag Assistant Browser Extension verwenden

---

**Status:** ✅ Vollständig implementiert und DSGVO-konform  
**Version:** 1.0  
**Letzte Aktualisierung:** November 2025

