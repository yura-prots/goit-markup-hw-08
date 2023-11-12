(() => {
  const mobileMenu = document.querySelector('.menu__btn');
  const openMenuBtn = document.querySelector('.menu-open');
  const closeMenuBtn = document.querySelector('.menu-close');
  const menuNav = document.querySelector('.menu__nav');

  const toggleMenu = () => {
    const isMenuOpen =
      mobileMenu.getAttribute('aria-expanded') === 'true' || false;
    mobileMenu.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    menuNav.classList.toggle('is-open');

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuNav.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  // bodyScrollLock.enableBodyScroll(document.body);
  // });
})();
