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
    "h1": "DOM <br> Is <br> CRUSHING MY SOUL",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",  // LINE 48
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About", //
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services", //
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product", //
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision", //
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END OF OBJECT

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//tested alternate method
//LOGO
let logo = document.getElementById("logo-img");
//logo.src= "img/logo.png"   DONT DO THIS
logo.src=siteContent["nav"]["img-src"]  //Do THIS instead

//select and alter NAV

const navas= document.querySelectorAll("a")
//console.log(navas);

navas[0].textContent=siteContent["nav"]["nav-item-1"]
navas[1].textContent=siteContent["nav"]["nav-item-2"]
navas[2].textContent=siteContent["nav"]["nav-item-3"]
navas[3].textContent=siteContent["nav"]["nav-item-4"]
navas[4].textContent=siteContent["nav"]["nav-item-5"]

///////
//ALTER color
navas[0].style.color='green';
navas[1].style.color='green';
navas[2].style.color='green';
navas[3].style.color='green';
navas[4].style.color='green';

//append and prepend


//navas.forEach((color, index) => {value.innerText = siteContent["p"][`nav-item-${index++}`]})
// navas.forEach(cb)

//style.color='green';

const headline= document.querySelector('h1');
headline.innerHTML=siteContent["cta"]["h1"]


//   CTA / "button": "Get Started",

const button= document.querySelector('button');
button.textContent=siteContent["cta"]["button"]

//element.addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });
button.addEventListener('click', (event) => {event.target.style.backgroundColor = 'teal';});
button.addEventListener('contextmenu', (event) => {event.target.style.backgroundColor = 'red';});

//CIRCLE IMAGE
let snippet = document.getElementById("cta-img");
snippet.src= siteContent["cta"]["img-src"]
//my first attempt at doing this I was copy pasting
//the actual value ie "img/header-img.png"
//instead of calling the actual value from the object

//CODE SNIPPET ACRROSS SCREEN
let midCode= document.getElementById("middle-img");
midCode.src= siteContent["main-content"]["middle-img-src"]

//class Text content

let textStuff= document.getElementsByClassName("text-content");
console.log(textStuff);

textStuff


// "main-content": {
//   "features-h4":"Features",

let fText= document.querySelectorAll("h4");
//fText.forEach(siteContent.textContent=)

fText[0].textContent=siteContent["main-content"]["features-h4"]
fText[1].textContent=siteContent["main-content"]["about-h4"]
fText[2].textContent=siteContent["main-content"]["services-h4"]
fText[3].textContent=siteContent["main-content"]["product-h4"]
fText[4].textContent=siteContent["main-content"]["vision-h4"]
fText[5].textContent=siteContent["contact"]["contact-h4"]

//console.log(fText);

//NEXT ACTION ITEM


//SEE LINE 92 then line 106

//JIMMY /ERNESTO FOR LOOP
//const navItems = document.querySelectorAll('a')
//pText.forEach((value, index) => {value.innerText = siteContent["p"][`nav-item-${index++}`]})
//my only thought would be to make an if statement to create an array of the keys that contain "content", 
//then use the loop on those, but even then you'd need multiple ones for the section selectors.  
//Probably WAY to complicated for this application. 
//Maybe if there were 1000 of them.  I'm going to just bang that part out manually to get it done.


let pText= document.querySelectorAll("p");

//console.log(pText);

pText[0].textContent=siteContent["main-content"]["features-content"]
pText[1].textContent=siteContent["main-content"]["about-content"]
pText[2].textContent=siteContent["main-content"]["services-content"]
pText[3].textContent=siteContent["main-content"]["product-content"]
pText[4].textContent=siteContent["main-content"]["vision-content"]
pText[5].textContent=siteContent["contact"]["address"]
pText[6].textContent=siteContent["contact"]["phone"]
pText[7].textContent=siteContent["contact"]["email"]
pText[8].textContent=siteContent["footer"]["copyright"]
pText[9].textContent=siteContent["main-content"]["vision-content"]



//

// ## Task 3: Add new content
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. 
//You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser