export function renderHotelDetail() {
  return `
    <div class="hotel-detail-container">
      <div class="hotel-detail">
        <button class="btn-back" onclick="goBack()">← Retour</button>
        <div id="hotel-detail-content">
          <!-- Le contenu sera injecté ici -->
        </div>
      </div>
    </div>
  `;
}

export async function loadHotelDetail(hotelId) {
  try {
    const response = await fetch(`http://localhost:5000/api/hotels/${hotelId}`);
    const hotel = await response.json();

    const content = document.getElementById('hotel-detail-content');
    content.innerHTML = `
      <div class="detail-wrapper">
        <div class="detail-image">
          <img src="${hotel.image}" alt="${hotel.name}" />
        </div>
        
        <div class="detail-info">
          <h1>${hotel.name}</h1>
          <p class="location"><i>📍</i> ${hotel.location}</p>
          <div class="rating">⭐ ${hotel.rating}/5</div>
          
          <div class="amenities">
            <h3>Équipements:</h3>
            <ul>
              ${hotel.amenities.map(a => `<li>✓ ${a}</li>`).join('')}
            </ul>
          </div>

          <p class="description">${hotel.description}</p>

          <div class="price-info">
            <span class="original-price">$${hotel.price}</span>
            ${hotel.discount > 0 ? `<span class="discount">-${hotel.discount}%</span>` : ''}
            <span class="final-price">$${Math.floor(hotel.price * (1 - hotel.discount/100))}/nuit</span>
          </div>

          <form class="booking-form" onsubmit="handleBooking(event, ${hotelId})">
            <h3>Réserver maintenant</h3>
            <input type="date" id="check-in-detail" placeholder="Date d'arrivée" required />
            <input type="date" id="check-out-detail" placeholder="Date de départ" required />
            <input type="number" id="num-rooms" placeholder="Nombre de chambres" min="1" value="1" required />
            <button type="submit" class="btn-book-now">RÉSERVER MAINTENANT</button>
          </form>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Erreur:', error);
  }
}
