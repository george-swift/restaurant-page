const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = '\u00A9 2021';

  const github = document.createElement('a');
  github.setAttribute('href', 'https://github.com/george-swift');
  github.setAttribute('target', '_blank');
  github.textContent = 'Github';
  github.classList.add('space');

  footer.append(copyright, github);

  return footer;
};

export default footer;