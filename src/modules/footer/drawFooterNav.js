import env from '../../env.json';
import prepareListHtml from '../helpers/prepareListHtml';

const drawFooterNav = () => {
  const footerNavWrapper = document.querySelector('.footer__nav-wrapper');
  const navData = env.footer;
  const prefix = 'footer__';

  const navHtml = Object.entries(navData).reduce((html, item) => {
    const listHtml = prepareListHtml({ arr: item[1].links, prefix: prefix});

    html += `
      <div class="${prefix}nav ${item[0]}">
        <h3 class="${prefix}nav-title">
          ${item[1].title}
        </h3>
        <ul class="${prefix}nav-list">
          ${listHtml}
        </ul>
      </div>
    `;

    return html;
  }, '');

  footerNavWrapper.innerHTML = navHtml;
};
export default drawFooterNav;