// alert("hello javascript");

const body = document.querySelector('body');
const header = document.querySelector('header');
const fixedArrow = document.querySelector('.fixed-arrow');
const mobNavBtn = document.querySelector(".mob-nav-btn");
const navList = document.querySelectorAll(".nav-list li");



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