
const menuBtn = document.getElementById('menuBtn');
const siteNav = document.getElementById('siteNav');
const closeNav = document.getElementById('closeNav');
if(menuBtn) menuBtn.addEventListener('click', ()=> siteNav.classList.add('open'));
if(closeNav) closeNav.addEventListener('click', ()=> siteNav.classList.remove('open'));
