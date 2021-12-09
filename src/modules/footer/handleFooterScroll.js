import smoothScroll from '../helpers/smoothScroll';

const handleFooterScroll = () => {

  const handleFooterLinks = e => {
    e.preventDefault();
    const target = e.target;

    (target.classList.contains('contacts__logo-link')) && smoothScroll(target);
  };

  document.addEventListener('click', e => handleFooterLinks(e));

}
export default handleFooterScroll;