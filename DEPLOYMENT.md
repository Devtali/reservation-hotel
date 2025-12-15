# 🚀 Guide de Déploiement

## Prérequis
- Node.js 16+
- npm ou yarn
- Git

## Déploiement Local

### 1. Cloner le projet
```bash
git clone <repository-url>
cd reservation-hotel
```

### 2. Installer les dépendances

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
cd ..
```

### 3. Lancer l'application

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

Accédez à: `http://localhost:5173`

---

## Déploiement en Production

### Option 1: Vercel (Frontend) + Heroku (Backend)

#### Frontend sur Vercel
```bash
npm run build
# Importer le projet sur Vercel depuis GitHub
```

#### Backend sur Heroku
```bash
cd backend
# Configurer Heroku
heroku login
heroku create nom-app
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### Option 2: Docker

**Dockerfile (racine du projet):**
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Frontend build
COPY package*.json ./
RUN npm install
RUN npm run build

# Backend setup
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install

# Exposer le port
EXPOSE 5000

CMD ["npm", "start"]
```

**Build et run:**
```bash
docker build -t reservation-hotel .
docker run -p 5000:5000 reservation-hotel
```

---

## Variables d'Environnement

### .env (Backend)
```
PORT=5000
JWT_SECRET=votre-clé-secrète-très-sécurisée
NODE_ENV=production
DATABASE_URL=url-base-de-données (optionnel)
```

---

## Checklist Pré-Déploiement

- [ ] Mettre à jour les URLs d'API pour l'environnement de production
- [ ] Générer des JWT_SECRET sécurisés
- [ ] Tester toutes les routes API
- [ ] Vérifier les CORS settings
- [ ] Configurer une base de données persistante
- [ ] Ajouter la validation des données
- [ ] Configurer HTTPS
- [ ] Activer le rate limiting

---

## Monitoring & Logs

Pour vérifier les logs en production:
```bash
# Heroku
heroku logs --tail

# Docker
docker logs <container-id>
```

---

## Support
Pour toute question, consultez le README.md ou contactez l'équipe de développement.
