const nav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('navbar');

  const home = document.createElement('a');
  home.classList.add('nav-link');
  home.textContent = 'Home';
  home.id = 'home';

  const menu = document.createElement('a');
  menu.classList.add('nav-link');
  menu.textContent = 'Menu';
  menu.id = 'menu';

  const contact = document.createElement('a');
  contact.classList.add('nav-link');
  contact.textContent = 'Contact';
  contact.id = 'contact';

  const about = document.createElement('a');
  about.classList.add('nav-link');
  about.textContent = 'About';
  about.id = 'about';

  nav.append(home, menu, contact, about);

  return nav;
};

export default nav;