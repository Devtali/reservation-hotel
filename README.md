# 🏨 Système de Réservation d'Hôtels - Yaoundé

Un site moderne de réservation d'hôtels pour Yaoundé, Cameroun.

## 📋 Structure du Projet

```
reservation-hotel/
├── src/                    # Frontend (Vite + JavaScript)
│   ├── components/         # Composants réutilisables
│   ├── pages/             # Pages de l'application
│   ├── main.js            # Point d'entrée
│   ├── style.css          # Styles globaux
│   └── index.html         # HTML principal
│
├── backend/               # Backend (Node.js + Express)
│   ├── routes/            # Routes API
│   ├── models/            # Modèles et base de données
│   ├── server.js          # Serveur Express
│   ├── package.json       # Dépendances
│   └── .env              # Variables d'environnement
```

## 🚀 Installation et Démarrage

### Frontend
```bash
# À la racine du projet
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

Le serveur tournera sur `http://localhost:5000`
Le frontend sur `http://localhost:5173`

## 📡 API Endpoints

### Hotels
- `GET /api/hotels` - Obtenir tous les hôtels
- `GET /api/hotels/:id` - Obtenir un hôtel par ID
- `GET /api/hotels/search/:name` - Rechercher des hôtels

### Auth
- `POST /api/auth/register` - Créer un compte
- `POST /api/auth/login` - Connexion utilisateur

### Bookings
- `POST /api/bookings` - Créer une réservation
- `GET /api/bookings/user/:userId` - Obtenir les réservations d'un utilisateur
- `DELETE /api/bookings/:id` - Annuler une réservation

### Admin
- `GET /api/admin/stats` - Obtenir les statistiques
- `POST /api/admin/hotels` - Ajouter un hôtel
- `PUT /api/admin/hotels/:id` - Modifier un hôtel
- `DELETE /api/admin/hotels/:id` - Supprimer un hôtel
- `GET /api/admin/bookings` - Obtenir toutes les réservations
- `PUT /api/admin/bookings/:id` - Mettre à jour une réservation

## 🎨 Fonctionnalités

✅ Liste des hôtels avec filtres  
✅ Détails d'hôtel  
✅ Système de réservation  
✅ Authentification utilisateur  
✅ Profil utilisateur  
✅ Panneau administrateur  
✅ Gestion des hôtels (CRUD)  
✅ Historique des réservations  
✅ Design responsive  

## 📦 Dépendances Principales

**Frontend:**
- Vite
- Vanilla JavaScript

**Backend:**
- Express
- JWT pour authentification
- bcryptjs pour sécurité des mots de passe
- CORS pour les requêtes cross-origin

## 👨‍💻 Auteur

Créé pour un projet concours pour la ville de Yaoundé
[limule Hinugera](wa.me/237683058178)
---

Bon développement ! 🎉
#

