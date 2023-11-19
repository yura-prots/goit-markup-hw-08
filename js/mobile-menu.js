(() => {
  const menuBtnRef = document.querySelector('.menu__btn');
  const mobileMenuRef = document.querySelector('.menu__nav');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('is-open');
  });
})();
