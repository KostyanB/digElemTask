const toggleMenu = () => {
  const headerNav = document.querySelector('.header__nav');

  const toggleMenu = () => headerNav.classList.toggle('isOpen');

  const closeMenu = () => headerNav.classList.remove('isOpen');

  const smoothScroll = id => {
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToSection = elem => {
    const id = elem.getAttribute('href');
    smoothScroll(id);

    closeMenu();
  };

  const handleMenu = e => {
    e.preventDefault();

    const target = e.target;
    //клик по кнопке меню
    (target.closest('.header__menu')) && toggleMenu();

    //клик по ссылке меню
    (target.classList.contains('header__nav-link')) && scrollToSection(target);

    //клик мимо меню и не по кнопке
    (!target.closest('.header__nav') && !target.closest('.header__menu')) && closeMenu();
  };

  document.addEventListener('click', e => handleMenu(e));
}
export default toggleMenu;