import smoothScroll from '../helpers/smoothScroll';

const handleFooterScroll = () => {
  const footer = document.getElementById('footer');

  const handleFooterLinks = event => {
    const target = event.target;
    const isTargetToScroll = target.classList.contains('contacts__logo-link') ||
      (target.tagName === 'A' && target.getAttribute('href')?.charAt(0) === '#');

    if (isTargetToScroll) {
      smoothScroll(event);
    } else {
      return;
    }
  };

  footer.addEventListener('click', event => handleFooterLinks(event));
};
export default handleFooterScroll;