export function renderAuthPages() {
  return {
    login: `
      <div class="auth-container">
        <div class="auth-box">
          <h2>Connexion</h2>
          <form onsubmit="handleLogin(event)">
            <input type="email" id="login-email" placeholder="Email" required />
            <input type="password" id="login-password" placeholder="Mot de passe" required />
            <button type="submit" class="btn-auth">Connexion</button>
            <p>Pas de compte ? <a href="#signup" onclick="showSignup()">S'inscrire</a></p>
          </form>
        </div>
      </div>
    `,
    
    signup: `
      <div class="auth-container">
        <div class="auth-box">
          <h2>Créer un compte</h2>
          <form onsubmit="handleSignup(event)">
            <input type="email" id="signup-email" placeholder="Email" required />
            <input type="password" id="signup-password" placeholder="Mot de passe" required />
            <input type="password" id="signup-confirm" placeholder="Confirmer le mot de passe" required />
            <button type="submit" class="btn-auth">S'inscrire</button>
            <p>Vous avez un compte ? <a href="#login" onclick="showLogin()">Se connecter</a></p>
          </form>
        </div>
      </div>
    `
  };
}

export async function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Connexion réussie!');
      // Rediriger vers home
      location.hash = '#home';
    } else {
      alert(data.error);
    }
  } catch (error) {
    alert('Erreur: ' + error.message);
  }
}

export async function handleSignup(event) {
  event.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;

  if (password !== confirm) {
    alert('Les mots de passe ne correspondent pas');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      alert('Compte créé avec succès! Veuillez vous connecter.');
      location.hash = '#login';
    } else {
      const data = await response.json();
      alert(data.error);
    }
  } catch (error) {
    alert('Erreur: ' + error.message);
  }
}
