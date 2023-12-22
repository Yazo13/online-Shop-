const menuIcon = document.getElementById('menu');
const topNav = document.querySelector('.top');
document.addEventListener('DOMContentLoaded', function () {
    menuIcon.addEventListener('click', function () {
        topNav.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {

  var queryString = window.location.search;

  var searchParams = new URLSearchParams(queryString);

  var usernameValue = searchParams.get('Username');

  var usernameElement = document.getElementById('Username');
  if (usernameElement && usernameValue) {
      usernameElement.innerText = usernameValue;
  }

   var xIsTrue = localStorage.getItem('xIsTrue');

   var box2 = document.getElementById('box2');
   if (box2 && xIsTrue === 'true') {
       box2.style.display = 'flex';
       localStorage.removeItem('xIsTrue');
   }
   var box1 = document.getElementById('box1');
   if (xIsTrue) {
      box1.style.display = 'none'
   }

    const slider = document.querySelector('.photos');
    const dotsContainer = document.getElementById('sliderDots');
    const photos = document.querySelectorAll('.photos img');

    photos.forEach((photo, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = dot.getAttribute('data-index');
            goToSlide(index);
        });
    });

    function goToSlide(index) {
        const translation = -index * 670; 
        slider.style.transition = 'transform 1s ease';
        slider.style.transform = `translateX(${translation}px)`;
        setActiveDot(index);
    }

    function setActiveDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % photos.length;
        goToSlide(currentIndex);
    }, 5000);
}, 5000);



document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".scroll-images");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");
  
    function checkScroll() {
      const currentScroll = scrollImages.scrollLeft;
      if (currentScroll === 0) {
        leftButton.setAttribute("disabled", "true");
        rightButton.removeAttribute("disabled");
      } else if (currentScroll === scrollLength) {
        rightButton.setAttribute("disabled", "true");
        leftButton.removeAttribute("disabled");
      } else {
        leftButton.removeAttribute("disabled");
        rightButton.removeAttribute("disabled");
      }
    }
  
    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();
  
    function leftScroll() {
      scrollImages.scrollBy({
        left: -200,
        behavior: "smooth"
      });
    }
  
    function rightScroll() {
      scrollImages.scrollBy({
        left: 200,
        behavior: "smooth"
      });
    }
    
  
    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
  });



  function customSmoothScroll(targetSelector, duration) {
    var target = document.querySelector(targetSelector);
    if (!target) return;

    var targetPosition = target.getBoundingClientRect().top;
    var startTime = performance.now();

    function scrollAnimation(currentTime) {
      var timeElapsed = currentTime - startTime;
      var progress = Math.min(timeElapsed / duration, 1);
      var easedProgress = easeInOutQuad(progress);
      window.scrollTo(0, targetPosition * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(scrollAnimation);
  }
var locations = {
  "op1" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5008.602630835627!2d44.78375265218222!3d41.717650056453955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d4fb9f5e75%3A0x7bffbbb9bcb2a6b9!2sGeorgian%20American%20University%20(GAU)!5e0!3m2!1sen!2sge!4v1700678632383!5m2!1sen!2sge",
  "op2" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12374.956905427814!2d44.83669174543175!3d41.801041861021965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d301a8a8e67%3A0x7c0bd618d8937d9d!2sZgva%20Ludi!5e0!3m2!1sen!2sge!4v1703087130366!5m2!1sen!2sge",
  "op3" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6600.822263623441!2d44.87666865444141!3d41.694909399213856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dc05a249c51%3A0xbf29d30700de3c6c!2sVarketili!5e0!3m2!1sen!2sge!4v1703087211686!5m2!1sen!2sge",
}

function selectOption(index) {
    document.getElementById('location1').src = locations[index]
}

