import smoothScroll from "../helpers/smoothScroll";

const handleHeaderMenu = () => {
  const headerNav = document.querySelector('.header__nav');

  const toggleMenu = () => headerNav.classList.toggle('isOpen');

  const closeMenu = () => headerNav.classList.remove('isOpen');

  const handleMenu = e => {
    //клик по кнопке меню
    (e.target.closest('.header__menu')) && toggleMenu();

    //клик мимо меню и не по кнопке
    (!e.target.closest('.header__nav') && !e.target.closest('.header__menu')) && closeMenu();

    //клик по ссылке меню
    if (e.target.classList.contains('header__nav-link')) {
      closeMenu();
      smoothScroll(e);
    }
  };

  document.addEventListener('click', e => handleMenu(e));
}
export default handleHeaderMenu;