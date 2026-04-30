#!/bin/bash

echo "🚀 RAUMELEGANZ SPANNDECKEN - SERVER START"
echo "=========================================="
echo ""

# Stoppe Dashboard auf Port 3000
echo "⏹️  Stoppe Dashboard (Port 3000)..."
lsof -ti:3000 | xargs kill -9 2>/dev/null
sleep 1

# Gehe ins Spanndecken-Verzeichnis
cd /Users/dt/Documents/spanndecken

# Starte Server
echo "✅ Starte Spanndecken Server..."
echo ""
npm run dev

