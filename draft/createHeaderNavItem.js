const createHeaderNavItem = ({ item, prefix }) => {
  const [ url, text ] = item;
  return `
    <li class="${prefix}nav-item">
      <a href="${url}" class="${prefix}nav-link">${text}</a>
    </li>
  `;
};
export default createHeaderNavItem;