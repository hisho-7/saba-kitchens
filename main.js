/*==========================
HEADER EFFECT
==========================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");


if(window.scrollY > 100){

header.style.background="#111";

header.style.padding="18px 0";

}


else{

header.style.background="rgba(0,0,0,.25)";

header.style.padding="25px 0";

}


});



/*==========================
COUNTER
==========================*/


/*const counters=document.querySelectorAll('.item h2');


counters.forEach(counter=>{


const update=()=>{


const target=parseInt(counter.innerText);

let count=parseInt(counter.dataset.count)||0;


const increment=target/80;


if(count<target){


count+=increment;

counter.dataset.count=count;

counter.innerText=Math.ceil(count)+"+";

setTimeout(update,20);

}


else{

counter.innerText=target+"+";

}


}


update();



});
*/
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

let target = +counter.dataset.target;
let count = 0;

let update = () => {

count += target / 100;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

counter.innerText = target + "+";

}

};

update();

});


/*==========================
SCROLL ANIMATION
==========================*/


const observer=new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}



});


});




const hidden=document.querySelectorAll(

'.card,.gallery-item,.review,.why-item'

);



hidden.forEach(el=>{


el.classList.add("hidden");


observer.observe(el);



});
/*==================
MENU
==================*/

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");


if(menu && nav){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");


if(nav.classList.contains("active")){

menu.innerHTML="✕";

}

else{

menu.innerHTML="☰";

}

});


const links = document.querySelectorAll("#nav a");


links.forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menu.innerHTML="☰";

});

});

}
/*==================
LIGHTBOX
==================*/

const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");


if(images.length && lightbox && lightboxImg && closeBtn){

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src = img.src;

const project = document.querySelector(".project-id");

const whatsapp = document.querySelector(".project-whatsapp");


const id = img.dataset.id;


if(project){

project.textContent = `مشروع رقم #${id}`;

}


if(whatsapp){

whatsapp.href = `https://wa.me/966534814167?text=${encodeURIComponent(`السلام عليكم، أرغب بالاستفسار عن مشروع رقم #${id}`)}`;
}
});

});


closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

});


lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});

}   


/* Quote Form */

const quoteForm = document.getElementById("quoteForm");

if(quoteForm){

quoteForm.addEventListener("submit",(e)=>{

e.preventDefault();

let name=document.getElementById('name').value;

let phone=document.getElementById('phone').value;

let city=document.getElementById('city').value;

let details=document.getElementById('details').value;

let message=`

الاسم : ${name}

الجوال : ${phone}

المدينة : ${city}

التفاصيل :

${details}

`;

window.open(

`https://wa.me/966537494632?text=${encodeURIComponent(message)}`

);

});

}

const faqBtns = document.querySelectorAll(".faq-btn");

if (faqBtns.length) {

  faqBtns.forEach(btn => {

    btn.addEventListener("click", () => {

      const content = btn.nextElementSibling;

      content.style.maxHeight =
        content.style.maxHeight ? null : content.scrollHeight + "px";

    });

  });

}

/*==================
FILTER GALLERY
==================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if(filterButtons.length && galleryItems.length){

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelectorAll(".filter-btn").forEach(btn=>{
btn.classList.remove("active");
});

button.classList.add("active");

const filter = button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all" || item.dataset.category===filter){

item.style.display="block";

}

else{

item.style.display="none";

}

});

});

});

}

