// alert("hello javascript");

const body = document.querySelector('body');
const header = document.querySelector('header');
const fixedArrow = document.querySelector('.fixed-arrow');
const mobNavBtn = document.querySelector(".mob-nav-btn");
const navList = document.querySelectorAll(".nav-list li");
const contentList = document.querySelectorAll(".sec-5-content-wrap .content")
const menuList = document.querySelectorAll(".sec-5-content-wrap .menu li")
const titWrap = document.querySelectorAll(".sec-3 .tit-wrap")
let i = 0



var swiper = new Swiper(".gallery", {
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop:true
});

var swiper = new Swiper(".slide-sec-3", {
    loop:true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    on: {
        activeIndexChange:function(){
            const i = this.realIndex

            titWrap.forEach((tit) => {
                tit.classList.remove("active")
            })
            titWrap[i].classList.add("active")
        }
    }
});




navList.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(document.querySelector(`#sec-${i+1}`))
        
        document.querySelector(`#sec-${i+1}`).scrollIntoView({
            behavior: "smooth"
        })
    });
});

// console.log(fixedArrow);

window.addEventListener('scroll', () => {
    if(window.scrollY>=100) {
        body.classList.add('scroll');
    }else {
        body.classList.remove('scroll');
    }
});

fixedArrow.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});

mobNavBtn.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.toggle("mob-nav-open");
});




function unit(x) {
    menuList[x].classList.add("active")
    contentList[x].classList.add("on")
}

function reset() {
    for (let i=0; i<menuList.length; i++){
        menuList[i].classList.remove("active")
        contentList[i].classList.remove("on")
    }
}

menuList.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault()
        reset()
        unit(index)
    })
})