import './src/css/style.css';
import drawHeaderNav from './src/modules/header/drawHeaderNav';
import handleHeaderMenu from './src/modules/header/handleHeaderMenu';
import drawFooterNav from './src/modules/footer/drawFooterNav';
import handleFooterScroll from './src/modules/footer/handleFooterScroll';
import handleOpenPopup from './src/modules/popup/handleOpenPopup';
import openPopup from './src/modules/popup/openPopup';

// header
drawHeaderNav();
handleHeaderMenu();
//footer
drawFooterNav();
handleFooterScroll();
//popup
handleOpenPopup();

document.getElementById('123').addEventListener('click', () =>
  openPopup(document.getElementById('message-popup')));