import smoothScroll from "../helpers/smoothScroll";

const handleHeaderMenu = () => {
  const headerNav = document.querySelector('.header__nav');

  const toggleMenu = () => headerNav.classList.toggle('isOpen');

  const closeMenu = () => headerNav.classList.remove('isOpen');

  const closeAndScroll = event => {
    closeMenu();
    smoothScroll(event);
  };

  const handleMenu = event => {
    const target = event.target;
    const isMenuBtnClick = target.closest('.header__menu');
    const isPastMenuClick = !target.closest('.header__nav') && !target.closest('.header__menu');
    const isLinkClick = target.classList.contains('header__nav-link');

    isMenuBtnClick && toggleMenu();
    isPastMenuClick && closeMenu();
    isLinkClick && closeAndScroll(event);
  };

  document.addEventListener('click', event => handleMenu(event));
}
export default handleHeaderMenu;