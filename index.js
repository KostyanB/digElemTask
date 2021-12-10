import './src/css/style.css';
import drawHeaderNav from './src/modules/header/drawHeaderNav';
import handleHeaderMenu from './src/modules/header/handleHeaderMenu';
import drawClientsLogos from './src/modules/clients/drawClientsLogos';
import drawFooterNav from './src/modules/footer/drawFooterNav';
import handleFooterScroll from './src/modules/footer/handleFooterScroll';
import handleOpenPopup from './src/modules/popup/handleOpenPopup';
import handleForm from './src/modules/form/handleForm';

// header
drawHeaderNav();
handleHeaderMenu();
// our clients
drawClientsLogos();
//footer
drawFooterNav();
handleFooterScroll();
//popup
handleOpenPopup();
// popup form
handleForm();