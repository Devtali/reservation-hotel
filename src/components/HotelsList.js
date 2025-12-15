export function renderHotelsList() {
  return `
    <section class="hotels-section">
      <div class="container">
        <h2>NOS HÔTELS</h2>
        <p>Sélectionnez l'établissement qui vous convient</p>
        <div id="hotels-grid" class="hotels-grid">
          <!-- Les hôtels seront chargés ici -->
        </div>
      </div>
    </section>
  `;
}

export async function loadHotels() {
  try {
    const response = await fetch('http://localhost:5000/api/hotels');
    const hotels = await response.json();
    const grid = document.getElementById('hotels-grid');
    
    grid.innerHTML = hotels.map(hotel => `
      <div class="hotel-card">
        <div class="hotel-image">
          <img src="${hotel.image}" alt="${hotel.name}" />
          <div class="hotel-badge">${hotel.discount ? '-' + hotel.discount + '%' : ''}</div>
        </div>
        <div class="hotel-info">
          <h3>${hotel.name}</h3>
          <p class="location"><i class="icon-location"></i> ${hotel.location}</p>
          <div class="rating">
            ${'⭐'.repeat(hotel.rating)} (${hotel.rating}/5)
          </div>
          <div class="price-section">
            <span class="price">$${hotel.price}/nuit</span>
            <button class="btn-reserve" onclick="viewHotelDetails(${hotel.id})">Réserver</button>
          </div>
        </div>
      </div>
    `).join('');
  } catch (error) {
    console.error('Erreur lors du chargement des hôtels:', error);
  }
}
