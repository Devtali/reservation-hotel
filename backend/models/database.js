// Simulated database for hotels
export const hotelsDb = [
  {
    id: 1,
    name: 'Hilton Yaoundé',
    location: 'Quartier Bastos',
    price: 150,
    discount: 10,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    description: 'Luxe hôtel avec vue sur la ville',
    amenities: ['WiFi', 'Piscine', 'Restaurant', 'Spa']
  },
  {
    id: 2,
    name: 'Méridien',
    location: 'Centre-ville',
    price: 120,
    discount: 15,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1517299321313-52581002a659?w=400&h=300&fit=crop',
    description: 'Hôtel élégant et moderne',
    amenities: ['WiFi', 'Climatisation', 'Bar', 'Salle de conférence']
  },
  {
    id: 3,
    name: 'Mont Cameroun',
    location: 'Plateau Atemengue',
    price: 95,
    discount: 0,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1470230532070-d440be69f1d5?w=400&h=300&fit=crop',
    description: 'Confortable et abordable',
    amenities: ['WiFi', 'Restaurant', 'Parking']
  },
  {
    id: 4,
    name: 'Radisson Blu',
    location: 'Gymnase',
    price: 200,
    discount: 20,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    description: 'Hôtel 5 étoiles premium',
    amenities: ['WiFi', 'Piscine', 'Spa', 'Casino', 'Restaurant haut de gamme']
  },
  {
    id: 5,
    name: 'Novotel',
    location: 'Biyem-Assi',
    price: 110,
    discount: 5,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1540932239986-310128078e6e?w=400&h=300&fit=crop',
    description: 'Design et confortable',
    amenities: ['WiFi', 'Restaurant', 'Fitness']
  },
  {
    id: 6,
    name: 'Garni Azur',
    location: 'Santa Barbara',
    price: 80,
    discount: 0,
    rating: 3,
    image: 'https://images.unsplash.com/photo-1582719508461-905a8eeb8092?w=400&h=300&fit=crop',
    description: 'Budget-friendly option',
    amenities: ['WiFi', 'Climatisation']
  }
];

// Simulated users database
export const usersDb = [
  {
    id: 1,
    email: 'admin@hotel.com',
    password: '$2b$10$XQJ...',
    role: 'admin'
  }
];

// Simulated bookings database
export const bookingsDb = [];
