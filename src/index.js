import home from './home.js';
import menu from './menu.js';
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