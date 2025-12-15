import { renderHeroSection } from '../components/Hero.js';
import { renderHotelsList } from '../components/HotelsList.js';

export function renderHome() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="home-container">
      ${renderHeroSection()}
      <div id="hotels-section">
        ${renderHotelsList()}
      </div>
    </div>
  `;
}
