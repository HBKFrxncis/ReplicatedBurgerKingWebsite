document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('container');

  // Array of image URLs and corresponding texts for the cards
  const cardData = [
    { imageUrl: 'Card 1.webp', text: 'YourBurgerKing',  description: 'Earn points and get rewarded with every order on the BK\nApp.', buttonText: 'Get rewarded', fontSize: '12px', color: '#502314' },
    { imageUrl: 'Card 2.webp', text: 'BK® Delivers, powered by Deliveroo®', description: 'Get your flame-grilled favourites straight to your door today!', buttonText: 'Order now', fontSize: '12px', color: '#502314' },
    { imageUrl: 'Card 3.webp', text: 'Peppercorn Gourmet Kings', description: '150g of Aberdeen Angus or Crispy Chicken with a\nclassic Peppercorn mayo', buttonText: 'Discover the range', fontSize: '12px', color: '#502314' },
    { imageUrl: 'Card 4.webp', text: 'NEW Doritos Tangy Cheese Chicken Fries', description: 'Chicken Fries, but make it Tangy. Get your hands on this tasty\ncollaboration!', buttonText: 'Order now', fontSize: '12px', color: '#502314' }
    // Add more image URLs and corresponding texts as needed
  ];

  // Create card elements dynamically
  cardData.forEach((data, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image');

    const image = document.createElement('img');
    image.src = data.imageUrl;
    image.alt = 'Card Image';

    const content = document.createElement('div');
    content.classList.add('content');

    const title = document.createElement('h2');
    title.textContent = data.text;
    title.style.color = '#502314'; 

    const description = document.createElement('p');
    description.textContent = data.description;
    description.classList.add('description');
    description.style.fontSize = data.fontSize;
    description.style.color = data.color;

    const button = document.createElement('button');
    button.textContent = data.buttonText;
    if (data.buttonText === 'Get rewarded') {
      button.classList.add('get-rewarded-button'); // Add class for 'Get rewarded' button
    } else {
      button.classList.add('order-button-' + (index + 1)); // Assign different classes to other buttons
    }

    // Append elements
    imageContainer.appendChild(image);
    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(imageContainer);
    card.appendChild(content);
    card.appendChild(button);
    container.appendChild(card); // Append card to container
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const footerNavigation = document.getElementById('footerNavigation');

  // Footer navigation data
  const footerData = [
    {
      title: 'BK® INFO',
      links: [
        { text: 'About BK ®', url: '#' },
        { text: 'FAQs', url: '#' },
        { text: 'Policies', url: '#' },
        { text: 'Get in touch', url: '#' },
        { text: 'Terms & Conditions', url: '#' },
        { text: 'Guest Trac', url: '#' },
        { text: 'Trademarks', url: '#' } 
      ]
    },
    {
      title: 'BK® AND YOU',
      links: [
        { text: 'Careers', url: '#' },
        { text: 'Privacy Policy', url: '#' },
        { text: 'Modern Slavery Statement', url: '#' },
        { text: 'Tax Strategy', url: '#' },
        { text: '', url: '#' },
        { text: '', url: '#' } 
      ]
    },
    // Add more sections with additional text content
  ];

  // Create footer navigation dynamically
  footerData.forEach((section) => {
    const column = document.createElement('div');
    column.classList.add('footer-column');

    const heading = document.createElement('h4');
    heading.textContent = section.title;

    const linkList = document.createElement('ul');
    section.links.forEach((link) => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.textContent = link.text;
      anchor.href = link.url;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    column.appendChild(heading);
    column.appendChild(linkList);
    footerNavigation.appendChild(column); // Append column to footer navigation
  });

  // Create and append the image below the footer navigation
  const footerImageContainer = document.createElement('div');
  footerImageContainer.classList.add('footer-image');

  const footerImage = document.createElement('img');
  footerImage.src = 'burger king footer logo.png'; 
  footerImage.alt = 'Footer Image';
  footerImage.width = '175';
  footerImage.height = '50';

  footerImageContainer.appendChild(footerImage);
  footerNavigation.parentNode.appendChild(footerImageContainer); // Append after the footer navigation

});
