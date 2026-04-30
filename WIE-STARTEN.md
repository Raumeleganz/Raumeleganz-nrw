# 🚀 SO STARTEST DU DIE SPANNDECKEN-WEBSITE

## ⚡ SCHNELLSTART (3 Schritte)

### **Schritt 1: Öffne ein Terminal**
- Drücke `Cmd + Space`
- Tippe "Terminal"
- Enter

### **Schritt 2: Führe das Start-Script aus**
```bash
cd /Users/dt/Documents/spanndecken
./start-server.sh
```

### **Schritt 3: Öffne im Browser**
```
http://localhost:3000
```

---

## 🔧 ALTERNATIVE: Manuell starten

Wenn das Script nicht funktioniert:

```bash
# 1. Gehe ins Verzeichnis
cd /Users/dt/Documents/spanndecken

# 2. Starte den Server
npm run dev
```

**WICHTIG:** 
- Wenn Port 3000 belegt ist, läuft der Server auf **Port 3001**
- Öffne dann: `http://localhost:3001`

---

## ✅ WAS DU SEHEN SOLLTEST

Im Terminal:
```
✓ Ready in 854ms
▲ Next.js 15.5.6 (Turbopack)
- Local:        http://localhost:3000
```

Im Browser:
- ✅ Gold-Gradient Hero Section
- ✅ "Verwandeln Sie Ihre Räume in Kunstwerke"
- ✅ 2 CTA-Buttons (Gold + Outline)
- ✅ 4 Trust-Badges (TÜV, Garantie, etc.)
- ✅ 3 Service-Cards mit Hover-Effekten

---

## 🆘 FALLS PROBLEME

### **"Port 3000 is in use"**
✅ **Lösung:** Server läuft auf Port 3001
```
http://localhost:3001
```

### **"next: command not found"**
✅ **Lösung:** Dependencies installieren
```bash
cd /Users/dt/Documents/spanndecken
npm install
npm run dev
```

### **Seite lädt nicht / Weißer Bildschirm**
✅ **Lösung 1:** Hard Refresh
- Chrome/Edge: `Cmd + Shift + R`
- Firefox: `Cmd + Shift + R`
- Safari: `Cmd + Option + R`

✅ **Lösung 2:** Cache leeren
1. Öffne Browser Developer Tools (`Cmd + Option + I`)
2. Rechtsklick auf Reload-Button
3. "Empty Cache and Hard Reload"

### **Fehler im Terminal**
✅ **Lösung:** Cache löschen und neu bauen
```bash
cd /Users/dt/Documents/spanndecken
rm -rf .next node_modules
npm install
npm run dev
```

---

## 🎨 NACH DEM START

### **Teste die Features:**
1. ✅ Scroll runter für Services
2. ✅ Hover über die Service-Cards (sollten hochgehen)
3. ✅ Checke die Animationen
4. ✅ Teste responsive Design (Browser verkleinern)

### **Ports im Überblick:**
| Projekt | Port | URL |
|---------|------|-----|
| Spanndecken | 3000 | http://localhost:3000 |
| Dashboard | 3000 | (gestoppt) |
| Prisma Studio | 5555 | http://localhost:5555 |

---

## 📞 SUPPORT

Falls du Fehler siehst oder etwas nicht funktioniert:
1. Kopiere die Fehlermeldung aus dem Terminal
2. Schicke mir einen Screenshot
3. Sag mir was du siehst im Browser

---

## 🚀 QUICK COMMANDS

```bash
# Server starten
./start-server.sh

# Server auf anderem Port (3001)
npm run dev -- -p 3001

# Server stoppen
# Drücke: Ctrl + C

# Dependencies neu installieren
npm install

# Cache löschen
rm -rf .next
```

---

**LOS GEHT'S!** 🎨

Öffne Terminal → `./start-server.sh` → Öffne Browser → `http://localhost:3000`

