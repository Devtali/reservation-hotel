#!/bin/bash

# Script de test rapide de l'API

API_URL="http://localhost:5000/api"

echo "🧪 Test de l'API du Système de Réservation d'Hôtels"
echo "=================================================="

# Test 1: Health Check
echo ""
echo "1️⃣  Test Health Check..."
curl -s "${API_URL}/health" | jq .

# Test 2: Obtenir tous les hôtels
echo ""
echo "2️⃣  Test Obtenir tous les hôtels..."
curl -s "${API_URL}/hotels" | jq '.[0:2]'

# Test 3: Obtenir un hôtel par ID
echo ""
echo "3️⃣  Test Obtenir hôtel par ID..."
curl -s "${API_URL}/hotels/1" | jq '.name, .price'

# Test 4: Inscription
echo ""
echo "4️⃣  Test Inscription..."
curl -s -X POST "${API_URL}/auth/register" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}' | jq .

# Test 5: Connexion
echo ""
echo "5️⃣  Test Connexion..."
curl -s -X POST "${API_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@hotel.com","password":"admin123"}' | jq '.token' | head -c 50

echo ""
echo ""
echo "✅ Tests complétés!"
