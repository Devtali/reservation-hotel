# 🗺️ Guide de Navigation

## URLs et Routes de l'Application

### Pages Disponibles

| URL | Page | Description |
|-----|------|-------------|
| `http://localhost:5173` | **Accueil** | Liste des hôtels |
| `http://localhost:5173/#home` | **Accueil** | Page d'accueil (alternative) |
| `http://localhost:5173/#hotel/1` | **Détails Hôtel 1** | Hilton Yaoundé |
| `http://localhost:5173/#hotel/2` | **Détails Hôtel 2** | Méridien |
| `http://localhost:5173/#hotel/3` | **Détails Hôtel 3** | Mont Cameroun |
| `http://localhost:5173/#hotel/4` | **Détails Hôtel 4** | Radisson Blu |
| `http://localhost:5173/#hotel/5` | **Détails Hôtel 5** | Novotel |
| `http://localhost:5173/#hotel/6` | **Détails Hôtel 6** | Garni Azur |
| `http://localhost:5173/#login` | **Connexion** | Page de login |
| `http://localhost:5173/#signup` | **Inscription** | Page d'inscription |
| `http://localhost:5173/#admin` | **Admin** | Panneau administrateur |

---

## Flux d'Utilisation Typique

### 👤 Utilisateur Nouveau

1. Aller à l'**Accueil** (#home)
2. Consulter les hôtels disponibles
3. Cliquer sur un hôtel pour voir les **Détails** (#hotel/ID)
4. Cliquer sur "RÉSERVER MAINTENANT"
5. Être redirigé vers **Connexion** (#login) - pas d'compte
6. Cliquer sur "S'inscrire" → **Inscription** (#signup)
7. Remplir le formulaire et créer un compte
8. Se connecter automatiquement
9. Revenir aux détails de l'hôtel
10. Remplir le formulaire de réservation
11. Confirmer la réservation

### 👥 Utilisateur Existant

1. Aller à **Connexion** (#login)
2. Entrer ses identifiants
3. Retourner à **Accueil** (#home)
4. Choisir un hôtel et réserver directement

### 🔧 Administrateur

1. Aller à **Admin** (#admin)
2. Voir les **Statistiques** (défaut)
3. Naviguer dans la sidebar pour:
   - 📊 **Statistiques** - Vue d'ensemble
   - 🏨 **Hôtels** - Gestion CRUD
   - 📅 **Réservations** - Suivi des bookings
   - ➕ **Ajouter Hôtel** - Ajouter une nouvelle option
4. Déconnexion disponible en bas du menu

---

## Composants et Données

### Hotel Card (Carte d'hôtel)

Chaque carte affiche:
- 🖼️ Image de l'hôtel
- 🏷️ Badge de réduction (si applicable)
- 📝 Nom et localisation
- ⭐ Note (1-5 étoiles)
- 💰 Prix par nuit
- 🔘 Bouton "Réserver"

### Hotel Detail Page (Page détails)

Affiche:
- ← Bouton de retour
- 📸 Image large
- 📋 Informations complètes
- ✓ Équipements listés
- 📝 Description
- 💵 Calcul du prix
- 📅 Formulaire de réservation

### Reservation Form (Formulaire réservation)

Demande:
- 📅 Date d'arrivée
- 📅 Date de départ
- 🛏️ Nombre de chambres
- ✅ Bouton "RÉSERVER MAINTENANT"

---

## Données de Test

### Comptes Pré-créés

**Admin (pour tester l'accès Admin):**
```
Email: admin@hotel.com
Mot de passe: admin123
```

**Créer votre propre compte:**
```
Aller à: #signup
Email: monmail@test.com
Mot de passe: password123
Confirmer: password123
```

### Hôtels de Démonstration

1. **Hilton Yaoundé** - $150/nuit - Bastos
2. **Méridien** - $120/nuit - Centre-ville (10% de réduction)
3. **Mont Cameroun** - $95/nuit - Plateau Atemengue
4. **Radisson Blu** - $200/nuit - Gymnase (20% de réduction)
5. **Novotel** - $110/nuit - Biyem-Assi (5% de réduction)
6. **Garni Azur** - $80/nuit - Santa Barbara

---

## Exemple de Réservation

1. Naviguer à `#hotel/1` (Hilton)
2. Voir le prix: $150/nuit
3. Sélectionner:
   - ✈️ Arrivée: 2024-12-20
   - 🚀 Départ: 2024-12-25 (5 nuits)
   - 🛏️ Chambres: 2
4. Calcul automatique: 150 × 5 × 2 = **$1500**
5. Cliquer "RÉSERVER MAINTENANT"
6. Se connecter/Inscrire
7. ✅ Réservation confirmée!

---

## Fonctionnalités de Navigation

### Navbar (Barre de Navigation)

- 🏠 **Accueil** - Retour à la liste des hôtels
- 🏨 **Hôtels** - Vue listing (placeholder)
- ℹ️ **À propos** - Info (placeholder)
- 📞 **Contact** - Formulaire (placeholder)
- 🔓 **Connexion** - Login (#login)
- ✍️ **Inscription** - Signup (#signup)
- 🔑 **Admin** - Panel admin (#admin)

### Responsive Design

- ✅ **Desktop** (1200px+) - Mise en page complète
- ✅ **Tablette** (768px-1199px) - Layout adapté
- ✅ **Mobile** (< 768px) - Layout empilé

---

## Conseils d'Utilisation

### Bien Débuter
1. D'abord tester l'**Accueil** pour voir la liste
2. Cliquer sur un hôtel pour explorer les détails
3. Essayer une réservation sans compte (sera redirigé)
4. Créer un compte via **Inscription**
5. Faire une vrai réservation
6. Consulter le **Panneau Admin** pour voir les stats

### Pour les Tests
- Utiliser différentes dates pour les réservations
- Tenter de réserver avant de vous connecter
- Vérifier le calcul automatique du prix
- Teste le design sur un téléphone

### Dépannage
- Si CORS error → Vérifier le backend sur port 5000
- Si page blanche → Ouvrir la console (F12) pour erreurs
- Si hôtels ne s'affichent pas → Vérifier l'API avec `/api/hotels`

---

## État Actuel

- ✅ Navigation complètement fonctionnelle
- ✅ Toutes les pages accessibles par hash
- ✅ Authentification intégrée
- ✅ Réservations opérationnelles
- ✅ Admin Dashboard fonctionnel
- ✅ Design responsive

---

Explorez l'application et testez toutes les fonctionnalités! 🎉
