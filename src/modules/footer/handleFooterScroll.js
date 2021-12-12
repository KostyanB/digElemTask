import smoothScroll from '../helpers/smoothScroll';

const handleFooterScroll = () => {
  const footer = document.getElementById('footer');

  const handleFooterLinks = e => {
    if (e.target.classList.contains('contacts__logo-link') ||
      (e.target.tagName === 'A' && e.target.getAttribute('href')?.charAt(0) === '#')) {
      smoothScroll(e);
    } else {
      return;
    }
  };

  footer.addEventListener('click', e => handleFooterLinks(e));
};
export default handleFooterScroll;