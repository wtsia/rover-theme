document.addEventListener("DOMContentLoaded", () => {
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        const options = {
          keys: ['topics'],
          threshold: 0.3
        };
        const fuse = new Fuse(data, options);
        
        const searchInput = document.getElementById('search-input');
        const results = document.getElementById('search-results');
        
        searchInput.addEventListener('input', () => {
          const query = searchInput.value;
          if (query.length > 0) {
            const searchResults = fuse.search(query);
            results.innerHTML = '';
            searchResults.forEach(result => {
              const item = document.createElement('div');
              item.innerHTML = `<a href="${result.item.url}">${result.item.title}</a>`;
              results.appendChild(item);
            });
          } else {
            results.innerHTML = '';
          }
        });
      });
  });
  