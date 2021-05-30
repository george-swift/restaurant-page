const reset = () => {
  const content = document.querySelector('#content');
  content.className = '';

  const navlinks = document.getElementsByClassName('nav-link');
  const l = navlinks.length;

  for (let i = 0; i < l; i += 1) {
    if (navlinks[i].classList.contains('active')) navlinks[i].classList.remove('active');
  }

  const container = document.querySelector('.container');
  if (container) container.remove();
};

export default reset;