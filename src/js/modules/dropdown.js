import $ from 'jquery';

export function dropDown() {
  $('[data-cart-close]').on('click', () => {
    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      dropdown.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  });

  document.addEventListener('click', (e) => {
    // console.log(e.target);
    const isDropdownButton = e.target.matches('[data-dropdown-button]');

    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) {
      return;
    }

    let currentDropdown;

    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');

      if (window.innerWidth <= 1023) {
        document.body.style.overflow = 'hidden';
      }
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });

    document
      .querySelectorAll('[data-dropdown-button].active')
      .forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
      });
  });
}
