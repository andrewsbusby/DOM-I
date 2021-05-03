const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// TITLE
const title = document.querySelector('title');
title.textContent = 'Great Idea!';

// IMAGES

const logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', 'img/logo.png');

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', 'img/header-img.png');

const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

// NAV

const nav = document.getElementsByTagName('a');
nav[0].textContent = 'Services';
nav[1].textContent = 'Product';
nav[2].textContent = 'Vision';
nav[3].textContent = 'Features';
nav[4].textContent = 'About';
nav[5].textContent = 'Contact';


// Append & Prepend

const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').append(blogLink);

const me = document.createElement('a');
me.textContent = 'Andrew';
me.href ='#';
document.querySelector('nav').prepend(me);

// NAV STYLE
const navColor = document.querySelector('nav');
navColor.style.backgroundColor = 'black';
const colorChange = document.querySelectorAll('header nav a');
colorChange[0].style.color ='green';
colorChange[1].style.color = 'green';
colorChange[2].style.color = 'green';
colorChange[3].style.color = 'green';
colorChange[4].style.color = 'green';
colorChange[5].style.color = 'green';
colorChange[6].style.color = 'green';
colorChange[7].style.color = 'green';


// H1

const h1 = document.querySelector('h1');
h1.textContent ='DOM';
h1.style.color = '#0073D9';

const newH1 = document.createElement('h1');
newH1.textContent = 'Is';
newH1.style.color = '#0073d9';
document.querySelector('h1').append(newH1);

const Ah1 = document.createElement('h1');
Ah1.textContent = 'Awsome';
Ah1.style.color = '#0073d9';
document.querySelector('h1').append(Ah1);


// BUTTON

const button = document.querySelector('button');
button.textContent = 'Get Started';

// H4

const h4 = document.querySelectorAll('h4');
h4[0].textContent = 'Features';
h4[1].textContent = 'About';
h4[2].textContent = 'Services';
h4[3].textContent = 'Product';
h4[4].textContent = 'Vision';
h4[5].textContent = 'Contact';

// P

const para = document.querySelectorAll('p');
para[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
para[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
para[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
para[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
para[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
para[5].textContent = '123 Way 456 Street Somewhere, USA';
para[6].textContent = '1 (888) 888-8888';
para[7].textContent = 'sales@greatidea.io';
para[8].textContent = 'Copyright Great Idea! 2018';