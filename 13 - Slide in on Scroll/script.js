// slows down how often function is run, helps w/ performance
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  console.log(e);
  sliderImages.forEach(sliderImage => {
    // halfway thru img
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

    // bottom of img
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    // slide in value is greater than top of img
    const isHalfShown = slideInAt > sliderImage.offsetTop;

    // if past img, slide back
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    }
    else {
      sliderImage.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));