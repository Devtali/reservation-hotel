import './style.css'
import { renderNavbar } from './components/Navbar.js'
import { renderHome } from './pages/Home.js'
import { loadHotels } from './components/HotelsList.js'
import { renderHotelDetail, loadHotelDetail } from './components/HotelDetail.js'
import { renderAuthPages, handleLogin, handleSignup } from './components/Auth.js'
import { renderAdminDashboard, loadAdminStats, loadHotelsList, loadBookingsList, showAddHotelForm } from './components/Admin.js'

const app = document.getElementById('app');

function renderPage() {
  const hash = location.hash.slice(1) || 'home';
  const mainContent = document.getElementById('main-content');

  if (hash === 'home') {
    renderHome();
    loadHotels();
  } else if (hash.startsWith('hotel/')) {
    const hotelId = parseInt(hash.split('/')[1]);
    mainContent.innerHTML = renderHotelDetail();
    loadHotelDetail(hotelId);
  } else if (hash === 'login') {
    const authPages = renderAuthPages();
    mainContent.innerHTML = authPages.login;
  } else if (hash === 'signup') {
    const authPages = renderAuthPages();
    mainContent.innerHTML = authPages.signup;
  } else if (hash.startsWith('admin')) {
    mainContent.innerHTML = renderAdminDashboard();
    // Load default admin stats
    loadAdminStats();
  }
}

// Global functions for onclick handlers
window.handleSearch = function() {
  const search = document.getElementById('search-city')?.value || '';
  const checkIn = document.getElementById('check-in')?.value || '';
  const checkOut = document.getElementById('check-out')?.value || '';
  alert(`Recherche: ${search} du ${checkIn} au ${checkOut}`);
};

window.viewHotelDetails = function(hotelId) {
  location.hash = `hotel/${hotelId}`;
};

window.goBack = function() {
  location.hash = 'home';
};

window.handleBooking = async function(event, hotelId) {
  event.preventDefault();
  
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    alert('Veuillez vous connecter pour réserver');
    location.hash = 'login';
    return;
  }

  const checkIn = document.getElementById('check-in-detail').value;
  const checkOut = document.getElementById('check-out-detail').value;
  const numberOfRooms = parseInt(document.getElementById('num-rooms').value);

  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        hotelId,
        checkIn,
        checkOut,
        numberOfRooms
      })
    });

    if (response.ok) {
      const data = await response.json();
      alert('Réservation confirmée! Total: $' + data.booking.totalPrice);
      location.hash = 'home';
    } else {
      alert('Erreur de réservation');
    }
  } catch (error) {
    alert('Erreur: ' + error.message);
  }
};

window.showLogin = function() {
  location.hash = 'login';
};

window.showSignup = function() {
  location.hash = 'signup';
};

window.logout = function() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.hash = 'home';
};

// Initialize app
app.innerHTML = renderNavbar();
const mainContent = document.createElement('div');
mainContent.id = 'main-content';
app.appendChild(mainContent);

renderPage();
window.addEventListener('hashchange', renderPage);
