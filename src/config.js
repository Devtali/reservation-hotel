// Configuration pour les tests
export const API_URL = 'http://localhost:5000/api';

// Données de test
export const TEST_CREDENTIALS = {
  user: {
    email: 'user@test.com',
    password: 'password123'
  },
  admin: {
    email: 'admin@hotel.com',
    password: 'admin123'
  }
};

// Les hôtels de démonstration (voir backend/models/database.js)
export const DEMO_HOTELS = [
  { name: 'Hilton Yaoundé', price: 150, location: 'Quartier Bastos' },
  { name: 'Méridien', price: 120, location: 'Centre-ville' },
  { name: 'Mont Cameroun', price: 95, location: 'Plateau Atemengue' },
  { name: 'Radisson Blu', price: 200, location: 'Gymnase' },
  { name: 'Novotel', price: 110, location: 'Biyem-Assi' },
  { name: 'Garni Azur', price: 80, location: 'Santa Barbara' }
];
