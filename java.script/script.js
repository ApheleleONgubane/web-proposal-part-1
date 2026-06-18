window.onload=function(){

alert("Welcome to Charcoal Aluminium Windows and Doors");

};



// SCROLL TO TOP 

const topBtn=document.getElementById("topBtn");

if(topBtn){

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}



// QUOTE FORM 

const quoteForm=document.getElementById("quoteForm");

if(quoteForm){

quoteForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Your quote request has been submitted.");

});

}



//CONTACT FORM 

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Your message has been sent.");

});

}



// SEARCH PRODUCTS 

function searchProducts(){

let input=document.getElementById("searchBar").value.toLowerCase();

let products=document.querySelectorAll(".productItem");

products.forEach(function(product){

if(product.innerText.toLowerCase().includes(input)){

product.style.display="list-item";

}

else{

product.style.display="none";

}

});

}



// LIGHTBOX

function openImage(image){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxImage").src=image.src;

}



function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}