# 🚀 RAUMELEGANZ SPANNDECKEN - START ANLEITUNG

## ✨ PROJEKT IST BEREIT!

Alle Dateien wurden erstellt. Jetzt musst du nur noch die Dependencies installieren und den Server starten.

---

## 📦 INSTALLATION & START

### **Öffne ein neues Terminal und führe aus:**

```bash
# 1. Gehe ins Projekt-Verzeichnis
cd /Users/dt/Documents/spanndecken

# 2. Installiere alle Dependencies (dauert ~30 Sekunden)
npm install

# 3. Starte den Development Server
npm run dev
```

### **Dann öffne im Browser:**
```
http://localhost:3000
```

---

## ✅ WAS INSTALLIERT WIRD:

- **next@15.5.6** - React Framework
- **react@19.1.0** - UI Library
- **react-dom@19.1.0** - React DOM
- **framer-motion@^12.23.24** - Animations
- **lucide-react@^0.468.0** - Icons
- **tailwindcss@^4** - CSS Framework
- **@tailwindcss/postcss@^4** - Tailwind Plugin
- **typescript@^5** - Type Safety

---

## 🎨 WAS DU SEHEN WIRST:

### **Premium Hero Section:**
- ✅ Full-Screen Gold-Gradient Background
- ✅ Elegante Headline: "Verwandeln Sie Ihre Räume in Kunstwerke"
- ✅ 2 CTA-Buttons (Gold-Gradient + Outline)
- ✅ 4 Trust-Badges (TÜV, 10 Jahre Garantie, Schnell, 1000+ Kunden)
- ✅ Animierter Scroll-Indicator

### **Services Preview:**
- ✅ 3 Premium-Cards mit Hover-Effekten
- ✅ Wohnraumdecken 🏠
- ✅ Lichtdecken & LED 💡
- ✅ Akustikdecken 🔊

---

## 🔧 FALLS PROBLEME:

### **"next: command not found"**
```bash
# Lösche Cache und installiere neu:
rm -rf node_modules package-lock.json
npm install
```

### **Port 3000 bereits belegt**
```bash
# Option A: Dashboard stoppen (Strg+C im Dashboard-Terminal)
# Option B: Anderen Port nutzen:
npm run dev -- -p 3001
# → http://localhost:3001
```

### **"Cannot find module"**
```bash
# Installiere Dependencies neu:
npm install
```

---

## 📂 PROJEKT-STRUKTUR:

```
spanndecken/
├── app/
│   ├── layout.tsx          ✅ Root Layout (Fonts, Meta)
│   ├── page.tsx            ✅ Homepage (Hero + Services)
│   └── globals.css         ✅ Tailwind v4 Theme
├── data/
│   └── cities.generated.ts ✅ 90 NRW-Städte
├── package.json            ✅ Dependencies
├── postcss.config.mjs      ✅ Tailwind Config
└── README.md               ✅ Dokumentation
```

---

## 🎯 DESIGN HIGHLIGHTS:

| Feature | Details |
|---------|---------|
| **Farbpalette** | Gold (#D4AF37), Anthracite (#2C3E50) |
| **Fonts** | Playfair Display (Headlines), Inter (Body) |
| **Animationen** | Fade-In, Hover-Lift, Scale, Slide |
| **Framework** | Next.js 15 + Tailwind v4 |
| **Icons** | Lucide React (modern & clean) |

---

## 🚀 NACH DEM START:

1. ✅ Öffne `http://localhost:3000`
2. ✅ Checke das Premium Design
3. ✅ Teste die Animationen (Hover über Cards)
4. ✅ Scroll runter für Services
5. ✅ Sage mir was du ändern willst!

---

## 💡 NÄCHSTE SCHRITTE (Optional):

1. ⏳ Dynamic Stadt-Pages für 90 NRW-Städte
2. ⏳ Navigation + Footer
3. ⏳ Galerie mit Lightbox
4. ⏳ Kontaktformular (React-Hook-Form)
5. ⏳ Leistungen-Detailseiten

---

## 📞 SUPPORT:

Falls du Fehler siehst oder Änderungswünsche hast, sag mir einfach Bescheid! 🎨

**LOS GEHT'S!** 🚀

```bash
cd /Users/dt/Documents/spanndecken && npm install && npm run dev
```

