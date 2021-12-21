const smoothScroll = event => {
  event.preventDefault();
  const id = event.target.getAttribute('href');

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
export default smoothScroll;