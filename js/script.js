fetch('components/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('#navbar .nav-link');

    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('bg-green-600', 'text-white', 'scale-105', 'h-20', 'rounded-4xl');
      }
    });
  });