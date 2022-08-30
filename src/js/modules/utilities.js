import $ from 'jquery';

export function jquery() {
  // $(document).ready(function (e) {
  //   $('.btn--categories').click(function () {
  //     $('.dropdown__categories').toggleClass('visible');
  //     $('.btn--categories').toggleClass('active');
  //   });
  // });
  // $(document).click((e) => {
  //   const isDropdownButton = e.target.matches('[data-dropdown-button]');
  //   if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null)
  //     return;
  //   let currentDropdown;
  //   if (isDropdownButton) {
  //     currentDropdown = e.target.closest('[data-dropdown]');
  //     currentDropdown.classList.toggle('active');
  //   }
  //   $("[data-dropdown].active").forEa
  // });

  document.addEventListener('click', (e) => {
    console.log(e.target);
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') !== null) {
      return;
    }
    let currentDropdown;

    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      // console.log(e.target.closest('div[data-dropdown]'));
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

  // $(.)

  function dropDown(e) {}
}

// function dropDownMenu(btnClass, itemClass) {
//   $(`.${btnClass}`).toggleClass('visible');
//   $(`.${itemClass}`).toggleClass('active');
// }
