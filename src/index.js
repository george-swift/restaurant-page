import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import about from './about.js';
import reset from './reset.js';
import './reset.css';
import './style.css';

home();

const homeTab = document.querySelector('#home');
homeTab.onclick = () => {
  reset();
  home();
};

const menuTab = document.querySelector('#menu');
menuTab.onclick = () => {
  reset();
  menu();
};

const contactTab = document.querySelector('#contact');
contactTab.onclick = () => {
  reset();
  contact();
};

const aboutTab = document.querySelector('#about');
aboutTab.onclick = () => {
  reset();
  about();
};
