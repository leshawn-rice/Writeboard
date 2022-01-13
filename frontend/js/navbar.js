function navigate(endpoint) {
  console.log(endpoint);
  const locationArray = window.location.href.split('/')
  locationArray.pop()
  const base = locationArray.join('/');
  window.location = base + `/${endpoint}.html`;
}

const navbar = document.querySelector('#navbar');

navbar.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList.contains('navbar-list-item')) {
    const endpoint = event.target.innerText.toLowerCase();
    navigate(endpoint);
  }
})