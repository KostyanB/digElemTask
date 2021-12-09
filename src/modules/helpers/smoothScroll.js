const smoothScroll = elem => {
  const id = elem.getAttribute('href');

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
export default smoothScroll;