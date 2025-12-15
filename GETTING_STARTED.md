# 🚀 Guide de Démarrage Rapide

## Installation

### 1. Frontend
```bash
cd reservation-hotel
npm install
npm run dev
```
L'app sera disponible sur `http://localhost:5173`

### 2. Backend
```bash
cd backend
npm install
npm run dev
```
L'API sera disponible sur `http://localhost:5000`

## 📱 Pages Disponibles

### Home (/)
- Liste de tous les hôtels
- Barre de recherche
- Filtres par prix et localisation

### Détails Hôtel (#hotel/ID)
- Informations complètes de l'hôtel
- Images
- Équipements
- Formulaire de réservation

### Connexion (#login)
- Email/Mot de passe
- Création de compte (#signup)

### Admin (#admin)
- Statistiques globales
- Gestion des hôtels (CRUD)
- Suivi des réservations
- Ajouter de nouveaux hôtels

## 🔐 Authentification

**Comptes de test:**
- Admin: `admin@hotel.com` / `password123`
- Client: Créer un nouveau compte

## 📡 API Endpoints Principaux

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/hotels` | Tous les hôtels |
| POST | `/api/auth/register` | Créer un compte |
| POST | `/api/auth/login` | Se connecter |
| POST | `/api/bookings` | Créer une réservation |
| GET | `/api/admin/stats` | Statistiques (Admin) |

## 🛠 Technos Utilisées

**Frontend:**
- Vite + JavaScript vanille
- HTML5 + CSS3

**Backend:**
- Node.js + Express
- JWT pour l'authentification
- bcryptjs pour les mots de passe

## 📝 Structure des Données

### Hôtel
```json
{
  "id": 1,
  "name": "Hilton Yaoundé",
  "location": "Quartier Bastos",
  "price": 150,
  "rating": 5,
  "image": "url",
  "amenities": ["WiFi", "Piscine"]
}
```

### Réservation
```json
{
  "id": 1,
  "userId": 1,
  "hotelId": 1,
  "checkIn": "2024-12-20",
  "checkOut": "2024-12-25",
  "numberOfRooms": 2,
  "totalPrice": 1500,
  "status": "confirmed"
}
```

---

Bon développement! 🎉
