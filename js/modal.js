(() => {
  const refs = {
    openModalBtn: document.querySelector('.modal-window-open-btn'),
    closeModalBtn: document.querySelector('.modal-window-close-btn'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle('is-hidden');
  }
})();
