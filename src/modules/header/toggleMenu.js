import smoothScroll from "../helpers/smoothScroll";

const toggleMenu = () => {
  const headerNav = document.querySelector('.header__nav');

  const toggleMenu = () => headerNav.classList.toggle('isOpen');

  const closeMenu = () => headerNav.classList.remove('isOpen');

  const handleMenu = e => {
    e.preventDefault();

    const target = e.target;
    //клик по кнопке меню
    (target.closest('.header__menu')) && toggleMenu();

    //клик мимо меню и не по кнопке
    (!target.closest('.header__nav') && !target.closest('.header__menu')) && closeMenu();

    //клик по ссылке меню
    if (target.classList.contains('header__nav-link')) {
      closeMenu();
      smoothScroll(target);
    }
  };

  document.addEventListener('click', e => handleMenu(e));
}
export default toggleMenu;