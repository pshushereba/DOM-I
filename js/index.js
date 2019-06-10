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

links = document.querySelectorAll("nav a");
links.forEach((item, i) => {
  item.textContent = siteContent["nav"][`nav-item-${i+1}`];
  // item.style.color = "green";
});

const navHome = document.createElement("a");
const navBlog = document.createElement("a");

navHome.textContent = "Home";
navBlog.textContent = "Blog";

const navLinks = document.querySelector("nav");

navLinks.prepend(navHome);
navLinks.appendChild(navBlog);
console.log(navLinks);

// CTA styling

let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

let ctaLogo = document.getElementById("cta-img");
ctaLogo.src = siteContent["cta"]["img-src"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

ctaBtn.addEventListener("click", (event) => {
  links.forEach((item, i) => {
    item.style.color = "black";
  });
});

// Main Content styling

const tcTitles = document.querySelectorAll(".top-content .text-content h4");
const tcContent = document.querySelectorAll(".top-content .text-content p");


const featuresTitle = tcTitles[0];
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = tcContent[0];
featuresContent.textContent = siteContent["main-content"]["features-content"];

const about = tcTitles[1];
about.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = tcContent[1];
aboutContent.textContent = siteContent["main-content"]["about-content"];

let midImg = document.querySelector(".middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

const bcTitles = document.querySelectorAll(".bottom-content .text-content h4");
const bcContent = document.querySelectorAll(".bottom-content .text-content p");

const servicesTitle = bcTitles[0];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = bcContent[0];
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productTitle = bcTitles[1];
productTitle.textContent = siteContent["main-content"]["product-h4"];

const productContent = bcContent[1];
productContent.textContent = siteContent["main-content"]["product-content"];

const visionTitle = bcTitles[2];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = bcContent[2];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// Contact Styling

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactInfo = document.querySelectorAll(".contact p");

const contactAddress = contactInfo[0];
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = contactInfo[1];;
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = contactInfo[2];;
contactEmail.textContent = siteContent["contact"]["email"];

// Footer

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];