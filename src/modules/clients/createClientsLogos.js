import env from '../../env.json';

const createClientsLogos = () => {
  const srcArr = env.clients.logosSrc;
  const clientsLogos = document.querySelector('.clients__logos');

  const logosHtml = srcArr.reduce((html, item) => {
    html += `
      <li class="clients__item">
        ${item[1]}
      </li>
    `;
    return html;
  }, '');

  clientsLogos.insertAdjacentHTML('afterbegin', logosHtml);
};
export default createClientsLogos;