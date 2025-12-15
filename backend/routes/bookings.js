import express from 'express';
import { bookingsDb, hotelsDb } from '../models/database.js';

const router = express.Router();

// Create booking
router.post('/', (req, res) => {
  try {
    const { userId, hotelId, checkIn, checkOut, numberOfRooms } = req.body;

    if (!userId || !hotelId || !checkIn || !checkOut) {
      return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }

    const hotel = hotelsDb.find(h => h.id === hotelId);
    if (!hotel) return res.status(404).json({ error: 'Hôtel non trouvé' });

    // Calculate total price
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalPrice = hotel.price * nights * numberOfRooms;

    const booking = {
      id: bookingsDb.length + 1,
      userId,
      hotelId,
      hotelName: hotel.name,
      checkIn,
      checkOut,
      numberOfRooms,
      totalPrice,
      nights,
      status: 'confirmed',
      createdAt: new Date()
    };

    bookingsDb.push(booking);
    res.status(201).json({ message: 'Réservation confirmée', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user bookings
router.get('/user/:userId', (req, res) => {
  const userBookings = bookingsDb.filter(b => b.userId === parseInt(req.params.userId));
  res.json(userBookings);
});

// Get all bookings
router.get('/', (req, res) => {
  res.json(bookingsDb);
});

// Cancel booking
router.delete('/:id', (req, res) => {
  const index = bookingsDb.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Réservation non trouvée' });

  const booking = bookingsDb[index];
  booking.status = 'cancelled';
  
  res.json({ message: 'Réservation annulée', booking });
});

export default router;
