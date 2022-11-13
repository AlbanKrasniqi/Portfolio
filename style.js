const togleIcon = document.querySelector('.togle_icon')
const navMenu = document.querySelector('.menu')
const menuLinks = document.querySelector('.menu_link')
const closeIcon=document.querySelector('.close_icon')


togleIcon.addEventListener('click',()=>{
    navMenu.classList.toggle('active')
});


closeIcon.addEventListener('click',()=>{
    navMenu.classList.remove('active')
});

// menuLinks.forEach((menuLink)=>{
//     menuLink.addEventListener('click',()=>{
//         navMenu.classList.remove('active')
//     });
// });

function scrollHeader(){
    const header = document.getElementById('header')
    this.scrollY >=20 ? header.classList.add('active'): header.classList.remove('active')
}

window.addEventListener('scroll', scrollHeader);

const typed = document.querySelector('.typed')

if(typed){
    let typed_strings= typed.getAttribute('data-typed-items')
    typed_strings= typed_strings.split(',');
    new Typed('.typed',{
        strings:typed_strings,
        loop:true,
        typeSpeed:100,
        backSpeed:50,
        backDelay:2000,
        
    })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });



