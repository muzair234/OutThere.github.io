(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation'); toggle.textContent='☰'; };
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    toggle.textContent = opened ? '×' : '☰';
  });
  nav.addEventListener('click', e => { if(e.target.closest('a')) close(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && nav.classList.contains('open')) {close();toggle.focus();} });
  document.addEventListener('click', e => { if(!e.target.closest('.header')) close(); });
  matchMedia('(min-width:768px)').addEventListener('change', e => {if(e.matches) close();});
})();
