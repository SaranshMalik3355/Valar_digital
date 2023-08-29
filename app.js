// Selecting html elements

const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

//swiper

// change header backgroud
function scrollHeader() {
  const header = document.getElementById("header");
  this.scrollY >= 20
    ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", scrollHeader);

//Scroll sections active links
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    let sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".menu a[href *=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".menu a[href *=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// product Scroll

const pages = document.querySelectorAll(".page");
const product = document.querySelector(".product");

function productActive() {
  const scrollY = window.pageYOffset;

  pages.forEach((page) => {
    const sectionHeight = page.offsetHeight;
    const sectionTop = page.offsetTop - 120;

    let sectionId = page.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".product_tabs a[href *=" + sectionId + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".product_tabs a[href *=" + sectionId + "]")
        .classList.remove("current");
    }
  });
}

window.addEventListener("scroll", productActive);

// items

let filterItems = document.querySelectorAll(".items_filters li");

function activeitems() {
  filterItems.forEach((el) => {
    el.classList.remove("filter-active");
    this.classList.add("filter-active");
  });
}

filterItems.forEach((el) => {
  el.addEventListener("click", activeitems);
});

// Mixitup filter items
let mixeritems = mixitup(".items_wrap-container", {
  selectors: {
    target: ".items_item",
  },
  animation: {
    duration: 300,
  },
});

// Testimonial section swiper

let swiper = new Swiper(".testimonial_container", {
  effect: "slide",
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 100,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//services
let modalBtns = document.querySelectorAll(".services_button"),
  modalViews = document.querySelectorAll(".services_modal"),
  modalClose = document.querySelectorAll(".modal_close-icon");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((el) => {
  el.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

//slide
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const pagination = document.querySelector(".pagination");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;

let currentIndex = 0;

// Create pagination dots
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", () => goToSlide(i));
  pagination.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
dots[currentIndex].classList.add("active");

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlider();
});

//  add to cart
const addToCartButton = document.getElementById("add-to-cart");
const cartCountSpan = document.getElementById("cart-count");

let cartCount = 0;

addToCartButton.addEventListener("click", () => {
  cartCount++;
  cartCountSpan.textContent = cartCount;
});
