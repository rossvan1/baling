function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
      // Wait for the page to fully load
  window.addEventListener('load', function() {
    // Get the audio element
    const audio = document.getElementById('background-music');
    
    // Play the audio
    audio.play();
  });
function toggleAudio() {
const audio = document.getElementById('background-music')
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


      function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
    
      function toggleAudio() {
        const audio = document.getElementById('background-music');
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }


