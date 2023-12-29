

const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top< offset+height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    let header=document.querySelector('header')
    header.classList.toggle("sticky",window.scrollY>100)

    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};

let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')

menubar.onclick=()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}






var type=new Typed('.textline',{
    strings:['Software Engineer','AI/ML Enthusiast','Android Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );