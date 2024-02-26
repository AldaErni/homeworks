(function () {
  // burger menu ===========================================================
  document.addEventListener("click", burgerInit);
  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLink = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }

  //  Modal menu =========================================================

  document.addEventListener("click", openModal);

  function openModal(e) {
    e.preventDefault();
    const giftButton = e.target.closest(".about__img-play");

    if (giftButton) {
      document.body.classList.add("body--opened-modal");
    }
  }

  document.addEventListener("click", closeModal);

  function closeModal(e) {
    const modal = e.target.classList.contains("modal");
    const modalClose = e.target.closest(".modal__cancel");
    e.preventDefault();

    if (modalClose || modal) {
      document.body.classList.remove("body--opened-modal");
    }
  }

  // Program tab content =================================================

  const tabControls = document.querySelector(".tab-controls");

  tabControls.addEventListener("click", toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link");
    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains("tab-controls__link--active")) return;

    const tabContentID = tabControl.getAttribute("href");
    const tabContent = document.querySelector(tabContentID);
    const activeControl = document.querySelector(".tab-controls__link--active");
    const activeContent = document.querySelector(".tab-content--show");

    if (activeContent) {
      activeContent.classList.remove("tab-content--show");
    }

    if (activeControl) {
      activeControl.classList.remove("tab-controls__link--active");
    }

    tabControl.classList.add("tab-controls__link--active");
    tabContent.classList.add("tab-content--show");
  }

  // accordion ===========================================================

  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        ".accordion-list__item--opened"
      );
      const accordionOpenedContent = accordionList.querySelector(
        ".accordion-list__item--opened .accordion-list__content"
      );

      const accordionControl = e.target.closest(".accordion-list__control");
      if (!accordionControl) return;
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove("accordion-list__item--opened");
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });

  // slider-gallery ===========================================================

  new Swiper(".gallery__slider", {
    slidesPerView: 1.5,
    spaceBetween: 15,

    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    breakpoints: {
      451: {
        slidesPerView: 2,
      },
      601: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      801: {
        spaceBetween: 32,
      },

      1101: {
        slidesPerView: 4,
      },
    },
  });
  // Slider testimonius ===========================================================

  new Swiper(".testimonials__slider", {
    slidesPerView: 2,
    centeredSlides: true,

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
})();

// const modal = document.querySelector(".modal");
// const modalButton = document.querySelector(".about__img-play");

// modalButton.addEventListener("click", openModal);
// modal.addEventListener("click", closeModal);

// function openModal(e) {
//   e.preventDefault();
//   document.body.classList.toggle("body--opened-modal");
// }

// function closeModal(e) {
//   e.preventDefault();
//   const target = e.target;

//   if (
//     target.closest(".modal__cancel") ||
//     target.classList.contains("modal")
//   ) {
//     document.body.classList.remove("body--opened-modal");
//   }
// }
