import express from 'express';
import { hotelsDb, bookingsDb } from '../models/database.js';

const router = express.Router();

// Admin: Get statistics
router.get('/stats', (req, res) => {
  const stats = {
    totalHotels: hotelsDb.length,
    totalBookings: bookingsDb.length,
    totalRevenue: bookingsDb.reduce((sum, b) => sum + b.totalPrice, 0),
    confirmedBookings: bookingsDb.filter(b => b.status === 'confirmed').length,
    cancelledBookings: bookingsDb.filter(b => b.status === 'cancelled').length
  };
  res.json(stats);
});

// Admin: Add hotel
router.post('/hotels', (req, res) => {
  try {
    const { name, location, price, rating, image, description, amenities } = req.body;

    const newHotel = {
      id: Math.max(...hotelsDb.map(h => h.id)) + 1,
      name,
      location,
      price,
      rating,
      image,
      description,
      amenities,
      discount: 0
    };

    hotelsDb.push(newHotel);
    res.status(201).json({ message: 'Hôtel ajouté avec succès', hotel: newHotel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin: Update hotel
router.put('/hotels/:id', (req, res) => {
  const hotel = hotelsDb.find(h => h.id === parseInt(req.params.id));
  if (!hotel) return res.status(404).json({ error: 'Hôtel non trouvé' });

  Object.assign(hotel, req.body);
  res.json({ message: 'Hôtel mis à jour', hotel });
});

// Admin: Delete hotel
router.delete('/hotels/:id', (req, res) => {
  const index = hotelsDb.findIndex(h => h.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Hôtel non trouvé' });

  const deletedHotel = hotelsDb.splice(index, 1);
  res.json({ message: 'Hôtel supprimé', hotel: deletedHotel[0] });
});

// Admin: Get all bookings
router.get('/bookings', (req, res) => {
  res.json(bookingsDb);
});

// Admin: Update booking status
router.put('/bookings/:id', (req, res) => {
  const booking = bookingsDb.find(b => b.id === parseInt(req.params.id));
  if (!booking) return res.status(404).json({ error: 'Réservation non trouvée' });

  booking.status = req.body.status || booking.status;
  res.json({ message: 'Statut mis à jour', booking });
});

export default router;
