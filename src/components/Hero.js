export function renderHeroSection() {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1>HÔTELS À YAOUNDÉ</h1>
        <p>Trouvez et réservez votre hôtel idéal</p>
        <div class="search-box">
          <input type="text" id="search-city" placeholder="Rechercher un hôtel..." />
          <input type="date" id="check-in" placeholder="Arrivée" />
          <input type="date" id="check-out" placeholder="Départ" />
          <button class="btn-search" onclick="handleSearch()">RECHERCHER</button>
        </div>
      </div>
    </section>
  `;
}
