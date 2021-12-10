const smoothScroll = e => {
  e.preventDefault();
  const id = e.target.getAttribute('href');

  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
export default smoothScroll;