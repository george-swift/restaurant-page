const contact = () => {
  const content = document.querySelector('#content');

  const contactTab = document.querySelector('#contact');
  contactTab.classList.add('active');

  const container = document.createElement('div');
  const classes = ['contact', 'container'];
  container.classList.add(...classes);

  const title = document.createElement('h1');
  title.textContent = 'Contact';

  const support = document.createElement('p');
  support.textContent = 'For reservations or enquiries';

  const email = document.createElement('p');
  email.textContent = 'E-mail: steakhouse@example.com';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: +(01)555-1101';

  container.append(title, support, email, phone);

  const footer = document.querySelector('.footer');
  content.insertBefore(container, footer);
};

export default contact;