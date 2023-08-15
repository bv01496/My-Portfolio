const cards = document.querySelectorAll('.card');
for(let i = 0; i < cards.length; i++){
  const card = cards[i];
  card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', stopRotate)
}

function rotate(e){
  const cardItem = this.querySelector('.card-item');
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = 'rotateX('+-(e.offsetY - halfHeight) / 40+'deg) rotateY('+(e.offsetX - halfHeight) / 40+'deg)';
}
function stopRotate(){
  const cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}

var containers = document.querySelectorAll(".card");

containers.forEach(function(container) {
  var element = container.querySelector(".abt-proj");

  container.addEventListener("mouseover", function() {
    element.style.opacity = "1";
  });

  container.addEventListener("mouseout", function() {
    element.style.opacity = "0";
  });
});


///  background animation

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
  
);

var menu = document.querySelector('.hamburger')
var menubar = document.querySelector('.navcont')
var cancel = document.querySelector('.cancel')
menu.addEventListener('click',openmenu )
menubar.addEventListener('click',openmenu )
var opened = false
function openmenu(){
  if(!opened){
    menubar.style.top = "0px"
    opened = true
  }else if(opened){
    menubar.style.top = "-400px"
    opened = false

  }

}