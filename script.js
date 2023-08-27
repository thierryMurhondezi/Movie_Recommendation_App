// Movie database
const movies = [
    {
      name: 'The Matrix',
      similarMovies: ['Inception', 'The Truman Show', 'Dark City']
    },
    {
      name: 'Inception',
      similarMovies: ['The Matrix', 'Shutter Island', 'Interstellar']
    },
    // more movies
  ];
  
  // Get form and recommendations div
  const form = document.getElementById('movie-form');
  const recommendationsDiv = document.getElementById('recommendations');
  
  // Form submit handler
  form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    
    const movie = document.getElementById('movie-input').value;
    
    // Get movie recommendations
    const results = getRecommendations(movie); 
    
    // Display recommendations
    let html = '<h2>Recommendations:</h2><ul>';
    results.forEach(movie => {
      html += `<li>${movie}</li>`;
    });
    html += '</ul>';
    
    recommendationsDiv.innerHTML = html;
    
  });
  
  // Get recommendations
  function getRecommendations(movieName) {
  
    const movie = movies.find(m => m.name === movieName);
    
    if (movie) {
      return movie.similarMovies; 
    } else {
      return ['No recommendations found'];
    }
    
  }