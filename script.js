// small helper JS
document.getElementById('year')?.textContent = new Date().getFullYear();

// mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('main-nav');
if(btn && nav){
  btn.addEventListener('click', ()=> {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'block';
  });
}