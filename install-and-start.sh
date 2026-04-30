#!/bin/bash

echo "========================================="
echo "🚀 SPANNDECKEN SETUP & START"
echo "========================================="

cd /Users/dt/Documents/spanndecken

echo ""
echo "1️⃣ Stopping all servers..."
pkill -f "next dev" 2>/dev/null
lsof -ti:3000 | xargs kill -9 2>/dev/null
sleep 2

echo ""
echo "2️⃣ Cleaning old installations..."
rm -rf node_modules package-lock.json .next

echo ""
echo "3️⃣ Installing dependencies..."
npm install

echo ""
echo "4️⃣ Checking installed packages..."
ls node_modules | grep -E "(gsap|lenis|framer|intersection)" || echo "⚠️  Some packages might be missing!"

echo ""
echo "5️⃣ Starting server on PORT 3000..."
echo "✅ Open: http://localhost:3000"
echo ""
npm run dev

