import smoothScroll from '../helpers/smoothScroll';

const handleFooterScroll = () => {

  const handleFooterLinks = e =>
    (e.target.classList.contains('contacts__logo-link')) && smoothScroll(e);

  document.addEventListener('click', e => handleFooterLinks(e));

}
export default handleFooterScroll;