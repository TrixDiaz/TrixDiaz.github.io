// Particles
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
  
  // Change text 
  function changeText(button) {
      button.textContent = "Click to View";
  }
  function resetText(button) {
      button.textContent = "Resume";
  }
  // Loop Typing Text
  const texts = ["Web Developer", "IT Specialist", "App Developer", "IT Technician"];
  
  const typingSpeed = 100; // Adjust this value to control the typing speed (in milliseconds)
  
  const typingElement = document.getElementById("typing-text");
  
  // Define function typeText
  function typeText(text, index) {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(() => typeText(text, index), typingSpeed);
    } else {
      setTimeout(() => {
        typingElement.textContent = ""; // Clear the text content after the whole text is typed
  
        // Move to the next text in the array
        const nextIndex = (texts.indexOf(text) + 1) % texts.length;
        typeText(texts[nextIndex], 0);
      }, 1000); // Add a delay before starting the next loop
    }
  }
  
  typeText(texts[0], 0); // Start the typing animation with the first text

  // NavBar
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// Scrolled 
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var scrolled = window.scrollY > 0;

  if (scrolled) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


// Bottom to Top
window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var scrolled = window.scrollY > 0;

  if (scrolled) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Show or hide the scroll-to-top button
  var scrollToTopButton = document.querySelector('.scroll-to-top');
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Function to smoothly scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}