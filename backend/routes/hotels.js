import express from 'express';
import { hotelsDb } from '../models/database.js';

const router = express.Router();

// Get all hotels
router.get('/', (req, res) => {
  res.json(hotelsDb);
});

// Get hotel by ID
router.get('/:id', (req, res) => {
  const hotel = hotelsDb.find(h => h.id === parseInt(req.params.id));
  if (!hotel) return res.status(404).json({ error: 'Hôtel non trouvé' });
  res.json(hotel);
});

// Search hotels
router.get('/search/:name', (req, res) => {
  const hotels = hotelsDb.filter(h => 
    h.name.toLowerCase().includes(req.params.name.toLowerCase())
  );
  res.json(hotels);
});

export default router;
