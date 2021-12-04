const button = document.getElementsByClassName('bulb');
const nav = document.querySelector('nav')
const navFont = document.getElementsByClassName('nav-main')
const h1 = document.getElementsByTagName('h1')
const p = document.getElementsByTagName('p')
const proj = document.getElementsByClassName('proj-container')
const contact = document.getElementsByClassName('contact-size')
const special = document.getElementsByClassName('special')

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

const darkTheme = ()=> {
    nav.classList.toggle('lightBack');
    for (let i=0; i< navFont[0].getElementsByTagName('a').length; i++){
        navFont[0].getElementsByTagName('a')[i].classList.toggle('darkfont')
        navFont[0].getElementsByTagName('a')[i].classList.toggle('lightfont')
    }
    button[0].classList.toggle('darkfont')
    // jumbo
    // bigtext[0].classList.toggle('lightfont')
    document.body.classList.toggle('darkBack')
    for (let i=0; i< h1.length; i++){
        h1[i].classList.toggle('lightfont')
    }
    for (let i=0; i< p.length; i++){
        p[i].classList.toggle('lightfont')
        for (let j=0; j< p[i].getElementsByTagName('a').length; j++){
            // p[i].getElementsByTagName('a')[j].classList.toggle('darkfont')
            p[i].getElementsByTagName('a')[j].classList.toggle('lightfont')
        }
    }


    for (let i=0; i< proj[0].getElementsByTagName('li').length; i++){
        proj[0].getElementsByTagName('li')[i].classList.toggle('darkProj')
    }
    for (let i=0; i< contact.length; i++) {
        contact[i].classList.toggle('lightfont')
    }
    for (let i=0; i< special.length; i++){
        special[i].classList.toggle('lightfont')
    }
    app.classList.toggle('lightfont')
}
button[0].addEventListener("click", darkTheme)


typewriter.typeString('Hi, I am Rhesa!')
    .pauseFor(2000)
    .deleteAll()
    .typeString('안녕 레사입니다!')
    .pauseFor(2000)
    .deleteAll()
    .start();