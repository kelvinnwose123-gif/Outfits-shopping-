const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const phoneNumber = "2348029321892"; // wa.me prefers no + or spaces
const imgDisplay = document.querySelector(".img-display");

/* create wrapper inside img-display */
const wrapper = document.createElement("div");

const nameEl = document.createElement("div");
const priceEl = document.createElement("div");
const orderLink = document.createElement("a");

/* ONLY text color */
nameEl.style.color = "red";
priceEl.style.color = "red";
orderLink.style.color = "red";

orderLink.textContent = "Tap to order";
orderLink.target = "_blank";

wrapper.appendChild(nameEl);
wrapper.appendChild(priceEl);
wrapper.appendChild(orderLink);
imgDisplay.appendChild(wrapper);

/* update content */
function updateOrderInfo() {
  const activeSlide = swiper.slides[swiper.activeIndex];

  const name = activeSlide.dataset.name;
  const price = activeSlide.dataset.price;

  nameEl.textContent = name;
  priceEl.textContent = price;

  const message = encodeURIComponent(
    `I want to order ${name} ${price}`
  );

  orderLink.href = `https://wa.me/${phoneNumber}?text=${message}`;

  /* 🔥 COPY ACTIVE SLIDE BACKGROUND */
  const slideBg = window.getComputedStyle(activeSlide).backgroundImage;
  imgDisplay.style.backgroundImage = slideBg;
}

/* first load */
updateOrderInfo();

/* update on slide change */
swiper.on("slideChange", updateOrderInfo);






