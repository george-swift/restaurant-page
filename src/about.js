const about = () => {
  const content = document.querySelector('#content');
  content.classList.add('for-about');

  const aboutTab = document.querySelector('#about');
  aboutTab.classList.add('active');

  const container = document.createElement('div');
  const classes = ['about', 'container'];
  container.classList.add(...classes);

  const title = document.createElement('h1');
  title.textContent = 'About';

  const aboutUs = document.createElement('div');
  aboutUs.classList.add('pad-div');
  const adsList = [
    'We provide our customers with luxurious dining and an overall unforgettable experience',
    'Steakhouse is currently situated in over 15 cities worldwide',
    'Book a reservation today',
  ];

  adsList.forEach((ad) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = ad;
    aboutUs.appendChild(paragraph);
  });

  container.append(title, aboutUs);

  const footer = document.querySelector('.footer');
  content.insertBefore(container, footer);
};

export default about;