(function () {
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


  document.addEventListener('click', openModal)

  function openModal(e) {
    const giftButton = e.target.closest('.about__img-play')

    if (giftButton) {
      document.body.classList.add('body--opened-modal')
    }
  }


  document.addEventListener('click', closeModal)

  function closeModal(e) {
    const modal = e.target.classList.contains("modal")
    const modalClose = e.target.closest('.modal__cancel')


    if (modalClose || modal) {
      document.body.classList.remove('body--opened-modal')
    }
  }












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
  
})();
