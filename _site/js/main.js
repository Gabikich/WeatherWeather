document.addEventListener('DOMContentLoaded', () => {
    // Lê as cidades favoritas (array de strings)
    const favorites = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
    
    // Para cada card, verifica se o título bate com alguma favorita
    document.querySelectorAll('.card').forEach(card => {
      const cityName = card.querySelector('.card-content .title').textContent.trim();
      if (favorites.includes(cityName)) {
        card.classList.add('favorite');
      }
    });

  });
  