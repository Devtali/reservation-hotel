export function renderAdminDashboard() {
  return `
    <div class="admin-container">
      <div class="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="#admin/stats" onclick="loadAdminStats()">📊 Statistiques</a></li>
          <li><a href="#admin/hotels" onclick="loadHotelsList()">🏨 Hôtels</a></li>
          <li><a href="#admin/bookings" onclick="loadBookingsList()">📅 Réservations</a></li>
          <li><a href="#admin/add-hotel" onclick="showAddHotelForm()">➕ Ajouter Hôtel</a></li>
          <li><a href="#home" onclick="logout()">🚪 Déconnexion</a></li>
        </ul>
      </div>
      
      <div class="admin-content">
        <div id="admin-main">
          <!-- Contenu admin ici -->
        </div>
      </div>
    </div>
  `;
}

export async function loadAdminStats() {
  const mainContent = document.getElementById('admin-main');
  
  try {
    const response = await fetch('http://localhost:5000/api/admin/stats');
    const stats = await response.json();

    mainContent.innerHTML = `
      <div class="admin-stats">
        <h2>Statistiques</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <h3>${stats.totalHotels}</h3>
            <p>Total d'hôtels</p>
          </div>
          <div class="stat-card">
            <h3>${stats.totalBookings}</h3>
            <p>Total de réservations</p>
          </div>
          <div class="stat-card">
            <h3>$${stats.totalRevenue}</h3>
            <p>Revenu total</p>
          </div>
          <div class="stat-card">
            <h3>${stats.confirmedBookings}</h3>
            <p>Réservations confirmées</p>
          </div>
          <div class="stat-card">
            <h3>${stats.cancelledBookings}</h3>
            <p>Réservations annulées</p>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    mainContent.innerHTML = `<p>Erreur: ${error.message}</p>`;
  }
}

export async function loadHotelsList() {
  const mainContent = document.getElementById('admin-main');

  try {
    const response = await fetch('http://localhost:5000/api/hotels');
    const hotels = await response.json();

    mainContent.innerHTML = `
      <div class="admin-hotels">
        <h2>Gestion des Hôtels</h2>
        <table class="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Localisation</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${hotels.map(h => `
              <tr>
                <td>${h.id}</td>
                <td>${h.name}</td>
                <td>${h.location}</td>
                <td>$${h.price}</td>
                <td>
                  <button class="btn-edit" onclick="editHotel(${h.id})">Modifier</button>
                  <button class="btn-delete" onclick="deleteHotel(${h.id})">Supprimer</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } catch (error) {
    mainContent.innerHTML = `<p>Erreur: ${error.message}</p>`;
  }
}

export async function loadBookingsList() {
  const mainContent = document.getElementById('admin-main');

  try {
    const response = await fetch('http://localhost:5000/api/admin/bookings');
    const bookings = await response.json();

    mainContent.innerHTML = `
      <div class="admin-bookings">
        <h2>Gestion des Réservations</h2>
        <table class="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hôtel</th>
              <th>Date Arrivée</th>
              <th>Date Départ</th>
              <th>Statut</th>
              <th>Prix Total</th>
            </tr>
          </thead>
          <tbody>
            ${bookings.map(b => `
              <tr>
                <td>${b.id}</td>
                <td>${b.hotelName}</td>
                <td>${b.checkIn}</td>
                <td>${b.checkOut}</td>
                <td><span class="status-${b.status}">${b.status}</span></td>
                <td>$${b.totalPrice}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  } catch (error) {
    mainContent.innerHTML = `<p>Erreur: ${error.message}</p>`;
  }
}

export function showAddHotelForm() {
  const mainContent = document.getElementById('admin-main');

  mainContent.innerHTML = `
    <div class="admin-form">
      <h2>Ajouter un Nouvel Hôtel</h2>
      <form onsubmit="handleAddHotel(event)">
        <input type="text" id="hotel-name" placeholder="Nom de l'hôtel" required />
        <input type="text" id="hotel-location" placeholder="Localisation" required />
        <input type="number" id="hotel-price" placeholder="Prix par nuit" required />
        <input type="number" id="hotel-rating" min="1" max="5" placeholder="Note (1-5)" required />
        <input type="url" id="hotel-image" placeholder="URL de l'image" required />
        <textarea id="hotel-description" placeholder="Description" required></textarea>
        <input type="text" id="hotel-amenities" placeholder="Équipements (séparés par des virgules)" required />
        <button type="submit" class="btn-submit">Ajouter l'hôtel</button>
      </form>
    </div>
  `;
}
