document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById('shareBtn');
    const ytBtn = document.querySelector('.yt');
    const igBtn = document.querySelector('.ig');
    const ghBtn = document.querySelector('.gh');
  
    let animationsActive = false;
  
    shareBtn.addEventListener('click', function() {
      if (!animationsActive) {
        ytBtn.classList.add('animate-to-left');
        igBtn.classList.add('animate-to-top');
        ghBtn.classList.add('animate-to-right');
      } else {
        ytBtn.classList.remove('animate-to-left');
        igBtn.classList.remove('animate-to-top');
        ghBtn.classList.remove('animate-to-right');
      }
      
      animationsActive = !animationsActive;
    });
  });