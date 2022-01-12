import './src/scss/style.scss';
import createHeaderNav from './src/modules/header/createHeaderNav';
import handleHeaderMenu from './src/modules/header/handleHeaderMenu';
import createClientsLogos from './src/modules/clients/createClientsLogos';
import createFooterNav from './src/modules/footer/createFooterNav';
import handleFooterScroll from './src/modules/footer/handleFooterScroll';
import handleOpenPopup from './src/modules/popup/handleOpenPopup';
import handleForm from './src/modules/form/handleForm';

// header
createHeaderNav();
handleHeaderMenu();
// our clients
createClientsLogos();
//footer
createFooterNav();
handleFooterScroll();
//popup
handleOpenPopup();
// popup form
handleForm();
