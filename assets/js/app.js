const display = document.querySelector('.counter-preview');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

let value = 100;
function increment() {
  value += 1;
  display.textContent = value;
}

function decrement() {
  value -= 1;
  display.textContent = value;
}



$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: ".prev",
  nextArrow: ".next",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 688,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
  ]
});




$('.responsive_2').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  autoplay: false,
  slidesToScroll: 2,
  arrows: true,
  prevArrow: ".btn_prev_2",
  nextArrow: ".btn_next_2",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,


      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
  ]
});



const timeData = document.querySelector("#time");
function countdownTimer(timeString) {
  let [days, hours, minutes, seconds] = timeString.split(":").map(Number);
  let totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      alert("Timer has ended");
      return;
    }
    days = Math.floor(totalSeconds / (24 * 60 * 60));
    hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    seconds = totalSeconds % 60;
    const timeLeft = `${days}:${hours}:${minutes}:${seconds}`;
    timeData.innerHTML = timeLeft;
    totalSeconds--;
  }, 1000);
}
countdownTimer("40:15:12:10");


