const prepareListHtml = ({ arr, prefix }) =>
  arr.reduce((html, item) => {
    html += `
      <li class="${prefix}nav-item">
        <a href="#${item[0]}" class="${prefix}nav-link">${item[1]}</a>
      </li>
    `;
    return html;
  },'');
export default prepareListHtml;