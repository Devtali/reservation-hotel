export function renderNavbar() {
  return `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <h1>🏨 Yaoundé Hotels</h1>
        </div>
        <ul class="nav-menu">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#hotels">Hôtels</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a href="#login" class="btn-login">Connexion</a>
          <a href="#signup" class="btn-signup">Inscription</a>
          <a href="#admin" class="btn-admin">Admin</a>
        </div>
      </div>
    </nav>
  `;
}
