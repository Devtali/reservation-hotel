# 🌐 URLs et Routes - Accès Rapide

## 🏃 Démarrage Ultra-Rapide

### 1. Lancer l'application
```bash
# Méthode 1 (Windows): Double-cliquez
start.bat

# Méthode 2 (Manuel)
npm run dev                    # Terminal 1: Frontend (5173)
cd backend && npm run dev      # Terminal 2: Backend (5000)
```

### 2. Accédez à ces URLs

| Page | URL | Fonction |
|------|-----|----------|
| 🏠 **Accueil** | http://localhost:5173 | Liste des hôtels |
| 🏨 **Hôtel 1** | http://localhost:5173/#hotel/1 | Hilton Yaoundé |
| 🔐 **Login** | http://localhost:5173/#login | Se connecter |
| ✍️ **Signup** | http://localhost:5173/#signup | S'inscrire |
| 📊 **Admin** | http://localhost:5173/#admin | Panneau admin |

---

## 🎮 Mode Démo Rapide

### Étape 1: Voir la liste
Allez à: **http://localhost:5173**
- Vous voyez 6 hôtels
- Cartes avec prix et ratings

### Étape 2: Voir les détails
Cliquez sur n'importe quel hôtel
- Détails complets
- Équipements listés
- Formulaire de réservation

### Étape 3: Essayer une réservation
Cliquez "RÉSERVER MAINTENANT"
- Système vous redirige automatiquement
- Vous demande de vous connecter
- Option s'inscrire + réserver

### Étape 4: Admin panel
Allez à: **http://localhost:5173/#admin**
- Voir les statistiques
- Gérer les hôtels
- Voir les réservations

---

## 📱 Tous les Hôtels Disponibles

### Accès Direct (Remplacer ID: 1-6)

```
http://localhost:5173/#hotel/1    Hilton Yaoundé ($150)
http://localhost:5173/#hotel/2    Méridien ($120)
http://localhost:5173/#hotel/3    Mont Cameroun ($95)
http://localhost:5173/#hotel/4    Radisson Blu ($200)
http://localhost:5173/#hotel/5    Novotel ($110)
http://localhost:5173/#hotel/6    Garni Azur ($80)
```

---

## 🔗 Toutes les Routes Disponibles

### 🏠 Pages Utilisateur
```
http://localhost:5173              → Accueil (listing hôtels)
http://localhost:5173/#home        → Accueil (alternatif)
http://localhost:5173/#hotel/[ID]  → Détails hôtel
http://localhost:5173/#login       → Connexion
http://localhost:5173/#signup      → Inscription
```

### 🔑 Pages Admin
```
http://localhost:5173/#admin              → Panel admin
http://localhost:5173/#admin/stats        → Statistiques
http://localhost:5173/#admin/hotels       → Gestion hôtels
http://localhost:5173/#admin/bookings     → Réservations
http://localhost:5173/#admin/add-hotel    → Ajouter hôtel
```

### 📡 API Endpoints (Backend)
```
GET    http://localhost:5000/api/hotels              Tous les hôtels
GET    http://localhost:5000/api/hotels/:id          Hôtel par ID
GET    http://localhost:5000/api/health              Health check
POST   http://localhost:5000/api/auth/register       S'inscrire
POST   http://localhost:5000/api/auth/login          Se connecter
POST   http://localhost:5000/api/bookings            Créer réservation
GET    http://localhost:5000/api/admin/stats         Statistiques
```

---

## ✨ Scénarios de Test Prédéfinis

### Scénario 1: Nouveau Visiteur
```
1. http://localhost:5173              (voir accueil)
2. Cliquer sur "Mont Cameroun"       (voir détails)
3. Cliquer "RÉSERVER MAINTENANT"     (redir login)
4. Cliquer "S'inscrire"               (aller à #signup)
5. Remplir: user@test.com / pass123   (créer compte)
6. Retour auto à détails              (voir formulaire)
7. Entrer dates et cliquer réserver   (✓ réservation)
```

### Scénario 2: Hôtel Cher
```
Cliquer sur Radisson Blu (#hotel/4)
- Voir $200/nuit avec réduction -20%
- Calcul: 200 × (1 - 0.2) = $160/nuit
- Exemple: 5 nuits × 2 rooms = $1600
```

### Scénario 3: Admin Dashboard
```
1. http://localhost:5173/#admin       (voir stats)
2. Cliquer "🏨 Hôtels"                (voir liste)
3. Cliquer "➕ Ajouter Hôtel"          (voir formulaire)
4. Remplir et soumettre               (✓ nouvel hôtel)
```

### Scénario 4: Test API Brut
```
curl http://localhost:5000/api/hotels
→ Voir JSON de tous les hôtels

curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@hotel.com","password":"admin123"}'
→ Récupérer le JWT token
```

---

## 🐛 Dépannage Rapide

### Frontend ne charge pas
```
❌ Erreur: Port 5173 occupé
✅ Solution: 
   - Tuer le processus: taskkill /F /IM node.exe
   - Ou changer le port dans vite.config.js
```

### API ne répond pas
```
❌ Erreur: Cannot GET /api/hotels
✅ Solution:
   - Vérifier backend: npm run dev dans /backend
   - Vérifier port 5000
   - Vérifier CORS dans server.js
```

### Réservation échoue
```
❌ Erreur: "Veuillez vous connecter"
✅ Solution:
   - Aller à #login
   - Se connecter d'abord
   - Puis réessayer
```

### LocalStorage vide
```
❌ Erreur: Pas de user stocké
✅ Solution:
   - Ouvrir DevTools (F12)
   - Application → LocalStorage
   - Vérifier clés: 'token', 'user'
   - Cliquer connexion pour repeupler
```

---

## 📊 Données de Connexion

### Admin (pré-créé)
```
Email: admin@hotel.com
Mot de passe: admin123
```

### Créer un Nouveau Compte
```
1. Aller à: http://localhost:5173/#signup
2. Email: monmail@test.com
3. Mot de passe: test123
4. Confirmer: test123
5. Cliquer "S'inscrire"
✓ Compte créé et connecté!
```

---

## 🎨 Personnalisation Rapide

### Changer couleurs
```
Fichier: src/style.css
Chercher: :root { color: #333; }
```

### Changer hôtels démo
```
Fichier: backend/models/database.js
Modifier l'array: hotelsDb = [...]
```

### Changer port fronted
```
Fichier: vite.config.js
Remplacer: port: 5173 → port: 3000
```

### Changer port backend
```
Fichier: backend/.env
Remplacer: PORT=5000 → PORT=3001
```

---

## 🔍 Test des URLs

### Via Navigateur
```
1. Copier l'URL
2. Coller dans barre adresse
3. Appuyer Entrée
4. Voir le résultat
```

### Via Curl (API)
```bash
curl http://localhost:5000/api/hotels | jq
curl -X GET http://localhost:5173/#admin  # Marche pas, vue côté client
```

### Via Postman
```
1. Télécharger Postman
2. POST: http://localhost:5000/api/auth/login
3. Body JSON: {"email":"admin@hotel.com","password":"admin123"}
4. Voir réponse avec token
```

---

## 📈 Progression Recommandée

### Pour Débutants
```
1. Voir accueil (#home)
2. Cliquer un hôtel (#hotel/1)
3. Essayer réserver (redir #login)
4. S'inscrire (#signup)
5. Revenir et réserver
6. Voir admin (#admin)
```

### Pour Développeurs
```
1. Consulter API: http://localhost:5000/api/hotels
2. Voir structure frontend: src/main.js
3. Voir routes backend: backend/routes/
4. Tester API avec curl
5. Modifier code et voir live reload
```

### Pour Product Managers
```
1. Consulter stats admin (#admin)
2. Voir flow réservation complet
3. Tester tous les hôtels
4. Faire test de charge (ab, wrk)
5. Vérifier performance
```

---

## ✅ Checklist de Vérification

- [ ] Frontend charge sur 5173
- [ ] Backend tourne sur 5000
- [ ] Voir 6 hôtels sur accueil
- [ ] Cliquer un hôtel → voir détails
- [ ] Formulaire calcule prix automatique
- [ ] S'inscrire → succès
- [ ] Se connecter → stocké dans localStorage
- [ ] Réserver après login → confirmation
- [ ] Admin panel accessible
- [ ] Stats s'affichent
- [ ] Ajouter hôtel fonctionne
- [ ] API répond en JSON

---

**C'est tout!** 🎉 Vous êtes prêt à explorer l'application!

Pour plus de détails: Voir **FINAL_SUMMARY.md** ou **README.md**
