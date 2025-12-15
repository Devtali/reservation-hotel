# 🏨 Système de Réservation d'Hôtels - Yaoundé

## 📊 Résumé du Projet

Bienvenue dans le projet complet de réservation d'hôtels pour Yaoundé, Cameroun! C'est une application web moderne conçue pour un concours scolaire.

**Statut:** ✅ MVP v1.0 - Totalement Fonctionnel

---

## 🎯 Objectifs Atteints

### ✅ Frontend (SPA avec Vite + Vanilla JS)
- Architecture modulaire avec composants réutilisables
- Interface utilisateur moderne et responsive
- Routing côté client avec hash (#)
- LocalStorage pour gestion utilisateur
- 4 pages principales complètement stylisées

### ✅ Backend (API REST avec Node.js/Express)
- 11 routes API pleinement fonctionnelles
- Authentification JWT + bcrypt
- CRUD complet pour hôtels et réservations
- Gestion d'erreurs robuste
- Données de démonstration (6 hôtels)

### ✅ Design UX/UI
- Palette couleur professionnelle
- Responsive design (desktop + mobile)
- Animations fluides et transitions
- Gradient modernes
- Cartes d'hôtels attrayantes

---

## 📂 Structure du Projet

```
reservation-hotel/
├── src/                          # Frontend
│   ├── components/
│   │   ├── Admin.js             # Panneau administrateur
│   │   ├── Auth.js              # Authentification
│   │   ├── Hero.js              # Bannière accueil
│   │   ├── HotelDetail.js        # Détails et réservation
│   │   ├── HotelsList.js         # Liste des hôtels
│   │   └── Navbar.js            # Navigation
│   ├── pages/
│   │   └── Home.js              # Page d'accueil
│   ├── main.js                  # Point d'entrée
│   ├── style.css                # Styles globaux (600+ lignes)
│   └── config.js                # Configuration
│
├── backend/                       # API Backend
│   ├── routes/
│   │   ├── admin.js             # Routes admin (CRUD)
│   │   ├── auth.js              # Authentification
│   │   ├── bookings.js          # Gestion réservations
│   │   └── hotels.js            # Gestion hôtels
│   ├── models/
│   │   └── database.js          # DB simulation
│   ├── server.js                # Serveur Express
│   ├── package.json             # Dépendances backend
│   └── .env                     # Variables d'env
│
├── index.html                   # HTML entry point
├── package.json                 # Dépendances frontend
├── vite.config.js              # Config Vite
├── README.md                    # Documentation principale
├── GETTING_STARTED.md           # Guide démarrage rapide
├── DEPLOYMENT.md                # Guide déploiement
└── CHECKLIST.md                 # État du projet
```

---

## 🚀 Démarrage Rapide

### Terminal 1 - Frontend (port 5173)
```bash
cd reservation-hotel
npm install
npm run dev
```

### Terminal 2 - Backend (port 5000)
```bash
cd reservation-hotel/backend
npm install
npm run dev
```

Accédez à: **http://localhost:5173**

---

## 📱 Fonctionnalités Principales

### 🏠 Page d'Accueil
- Liste complète des 6 hôtels
- Cartes avec images, prix, ratings
- Badges de réduction
- Barre de recherche

### 🏨 Détails d'Hôtel
- Images haute résolution
- Informations complètes
- Liste d'équipements
- Calcul automatique du prix
- Formulaire de réservation

### 👤 Authentification
- Inscription avec email/mot de passe
- Connexion sécurisée (JWT)
- Stockage des données utilisateur
- Vérification d'authentification

### 📅 Réservation
- Sélection dates (check-in/check-out)
- Nombre de chambres
- Calcul du total automatique
- Confirmation immédiate

### 📊 Panneau Admin
- Statistiques globales (hôtels, réservations, revenus)
- Gestion complète des hôtels (CRUD)
- Suivi des réservations
- Ajouter de nouveaux hôtels
- Vue tabellaire intégrée

---

## 🔌 API Endpoints

### Hotels
```
GET    /api/hotels              # Tous les hôtels
GET    /api/hotels/:id          # Hôtel par ID
GET    /api/hotels/search/:name # Rechercher
```

### Auth
```
POST   /api/auth/register       # Inscription
POST   /api/auth/login          # Connexion
```

### Bookings
```
POST   /api/bookings                 # Créer réservation
GET    /api/bookings/user/:userId   # Mes réservations
DELETE /api/bookings/:id            # Annuler
```

### Admin
```
GET    /api/admin/stats              # Statistiques
POST   /api/admin/hotels             # Ajouter hôtel
PUT    /api/admin/hotels/:id         # Modifier
DELETE /api/admin/hotels/:id         # Supprimer
GET    /api/admin/bookings           # Toutes les réservations
PUT    /api/admin/bookings/:id       # Modifier statut
```

---

## 🛠 Technologies Utilisées

| Couche | Technologies |
|--------|-------------|
| **Frontend** | Vite, HTML5, CSS3, Vanilla JS |
| **Backend** | Node.js, Express.js, JWT, bcryptjs |
| **Base de Données** | JSON simulation (prête pour MongoDB/PostgreSQL) |
| **DevTools** | Nodemon, npm scripts |

---

## 📊 Données de Démonstration

### Hôtels Disponibles (6)
1. **Hilton Yaoundé** - Quartier Bastos - $150/nuit ⭐⭐⭐⭐⭐
2. **Méridien** - Centre-ville - $120/nuit ⭐⭐⭐⭐
3. **Mont Cameroun** - Plateau Atemengue - $95/nuit ⭐⭐⭐⭐
4. **Radisson Blu** - Gymnase - $200/nuit ⭐⭐⭐⭐⭐
5. **Novotel** - Biyem-Assi - $110/nuit ⭐⭐⭐⭐
6. **Garni Azur** - Santa Barbara - $80/nuit ⭐⭐⭐

---

## 🔐 Sécurité

- ✅ Mots de passe hashés (bcryptjs)
- ✅ JWT tokens pour authentification
- ✅ CORS configuré
- ✅ Validation des données
- ✅ Error handling complet

---

## 📈 Prochaines Phases

### Phase 2 (Base de Données)
- [ ] Connecter MongoDB
- [ ] Migrations de schémas
- [ ] Backup et restore

### Phase 3 (Paiement)
- [ ] Intégration Stripe/PayPal
- [ ] Confirmation de paiement
- [ ] Factures PDF

### Phase 4 (Notifications)
- [ ] Emails de confirmation
- [ ] SMS de réservation
- [ ] Rappels automatiques

### Phase 5 (Optimisations)
- [ ] Caching Redis
- [ ] Compression images
- [ ] PWA (offline mode)
- [ ] Tests automatisés

---

## 📞 Support

### Documentation
- 📖 **README.md** - Vue d'ensemble
- 🚀 **GETTING_STARTED.md** - Démarrage rapide
- 🌐 **DEPLOYMENT.md** - Déploiement production
- ✅ **CHECKLIST.md** - État complet

### Troubleshooting
1. Port déjà utilisé? Changer dans `vite.config.js` et `server.js`
2. API non disponible? Vérifier que le backend s'exécute sur port 5000
3. CORS error? Vérifier les paramètres de CORS dans `server.js`

---

## 📄 Licences

Ce projet est conçu à titre éducatif pour un concours scolaire.

---

## 🎉 Conclusion

Votre système de réservation d'hôtels est prêt pour:
- ✅ Les tests de fonctionnalité
- ✅ La présentation au concours
- ✅ Le déploiement en production (avec base de données)
- ✅ L'évolution future

**Bonne chance pour votre concours!** 🚀

---

**Dernière mise à jour:** 15 Décembre 2025  
**Version:** 1.0.0  
**Status:** MVP Complet et Fonctionnel
