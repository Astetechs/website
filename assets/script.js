// Basic JS for mobile nav toggle and graceful interactions
document.addEventListener('DOMContentLoaded', function(){
  // Generic nav toggle (works on each page)
  function initToggle(toggleId, navId){
    const t = document.getElementById(toggleId);
    if(!t) return;
    t.addEventListener('click', () => {
      // find sibling nav
      const parent = t.closest('.header-inner');
      const nav = parent ? parent.querySelector('.nav') : document.querySelector('.nav');
      if(!nav) return;
      nav.classList.toggle('mobile-open');
    });
  }
  initToggle('navToggle');
  initToggle('navToggleAbout');
  initToggle('navToggleServices');
  initToggle('navToggleContact');

  // Smooth scroll for same-page anchors (if any)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple fade-in on scroll
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Static form demo behavior
  const sendBtn = document.getElementById('sendBtn');
  if(sendBtn){
    sendBtn.addEventListener('click', ()=>{
      sendBtn.innerText = 'Sending...';
      setTimeout(()=>{
        sendBtn.innerText = 'Send Message';
        alert('This is a static demo form. Connect a backend to process submissions.');
      }, 800);
    });
  }
});
