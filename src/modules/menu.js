const menu = () => {
  const content = document.querySelector('#content');

  const menuTab = document.querySelector('#menu');
  menuTab.classList.add('active');

  const container = document.createElement('div');
  const classes = ['menu', 'container'];
  container.classList.add(...classes);

  const title = document.createElement('h1');
  title.textContent = 'Menu';

  const items = document.createElement('ul');
  const menu = [
    'Slow-Roasted Prime Rib.........$155',
    'Natural Cut Ribeye.........$146',
    'Center-Cut Sirloin.........$272',
    "Vitoria's Filet Mignon.........$349",
    '24K Liquid Gold Ribs.........$1155',
  ];

  menu.forEach((dish) => {
    const list = document.createElement('li');
    list.textContent = dish;
    items.appendChild(list);
  });

  container.append(title, items);

  const footer = document.querySelector('.footer');
  content.insertBefore(container, footer);
};

export default menu;