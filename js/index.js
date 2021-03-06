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

let services = document.querySelectorAll('a');
services[0].textContent = siteContent["nav"]["nav-item-1"];
services[1].textContent = siteContent["nav"]["nav-item-2"];
services[2].textContent = siteContent["nav"]["nav-item-3"];
services[3].textContent = siteContent["nav"]["nav-item-4"];
services[4].textContent = siteContent["nav"]["nav-item-5"];
services[5].textContent = siteContent["nav"]["nav-item-6"];

let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent.cta.h1;

let button1 = document.querySelector('button');
button1.textContent = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let toph4 = document.querySelectorAll('.top-content .text-content h4')
toph4[0].textContent = siteContent["main-content"]["features-h4"];
toph4[1].textContent = siteContent["main-content"]["about-h4"];

let toContent = document.querySelectorAll('.top-content .text-content p')
toContent[0].textContent = siteContent["main-content"]["features-content"];
toContent[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomh4 = document.querySelectorAll('.bottom-content .text-content h4');
bottomh4[0].textContent = siteContent["main-content"]["services-h4"];
bottomh4[1].textContent = siteContent["main-content"]["product-h4"];
bottomh4[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll('.bottom-content .text-content p');
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contact = document.querySelectorAll('.contact p');
contact[0].textContent = siteContent['contact']['address'];
contact[1].textContent = siteContent['contact']['phone'];
contact[2].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer');
footer.textContent = "Copyright Great Idea! 2018"

let nava = document.querySelectorAll('nav a');
nava[0].style.color = 'green';
nava[1].style.color = 'green';
nava[2].style.color = 'green';
nava[3].style.color = 'green';
nava[4].style.color = 'green';
nava[5].style.color = 'green';

let nav = document.querySelector('nav');
let a = document.createElement('a')
a.textContent = "Home"
a.setAttribute('href', '#')
a.style.color = 'green'
nav.prepend(a)

let a2 = document.createElement('a')
a2.textContent = "Schedule"
a2.setAttribute('href', '#')
a2.style.color = 'green'
nav.appendChild(a2)