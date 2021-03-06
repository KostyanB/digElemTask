import env from '../../env.json';
import prepareListHtml from '../helpers/prepareListHtml';

const createHeaderNav = () => {
  const headerNav = document.querySelector('.header__nav');
  const linksArr = env.header.navLinks;

  headerNav.innerHTML = prepareListHtml({
    arr: linksArr,
    prefix: 'header__',
  });
};
export default createHeaderNav;