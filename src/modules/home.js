import nav from './nav.js';
import footer from './footer.js';

const home = () => {
  const content = document.querySelector('#content');
  content.classList.add('for-home');

  if (!document.querySelector('.navbar')) {
    const navbar = nav();
    content.appendChild(navbar);
  }

  const homeTab = document.querySelector('#home');
  homeTab.classList.add('active');

  const container = document.createElement('div');
  const classes = ['home', 'container'];
  container.classList.add(...classes);

  const title = document.createElement('h1');
  title.textContent = 'Steakhouse';

  const motto = document.createElement('p');
  motto.textContent = 'Dining should be a delightful and beautiful experience';

  const info = document.createElement('ul');
  info.classList.add('info');

  const services = [
    '\u2022 Opening Hours',
    '\u2022 Make a reservation',
    '\u2022 Private Dining',
    '\u2022 Events',
    '\u2022 Locations',
  ];

  services.forEach((option) => {
    const list = document.createElement('li');
    list.textContent = option;
    info.appendChild(list);
  });

  container.append(title, motto, info);

  if (!document.querySelector('.footer')) {
    const footerSection = footer();
    content.append(container, footerSection);
  } else if (document.querySelector('.footer')) {
    const footerSection = document.querySelector('.footer');
    content.insertBefore(container, footerSection);
  }
};

export default home;