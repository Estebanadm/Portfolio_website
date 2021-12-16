//Mouse circle 
const mouseCircle= document.querySelector(".mouse-circle");
const mouseDot= document.querySelector(".mouse-dot");
const mouseCircleFn=(x,y)=>{
    mouseCircle.style.cssText=`top:${y}px;left:${x}px;opacity:1`;
    mouseDot.style.cssText=`top:${y}px;left:${x}px;opacity:1`;

};
//End of Mouse Circle
//Animated Circles
const mainImage=document.querySelector('.main-circle img')

let mX=0
let mY=0

const animateCircles=(e,x,y)=>{

   if(x<mX){
        mainImage.style.left='25px'
   }else if(x>mX){
        mainImage.style.left='-25px'
    }
   if(y<mY){
        mainImage.style.top='10px'
   }else  if(y>mY){
        mainImage.style.top='-10px'
    }
   mX=e.clientX
   mY=e.clientY
   
}
//Navigation End

//end of animated Circles
document.body.addEventListener('mousemove',(e) =>{
    let x= e.clientX;
    let y= e.clientY;
    // mouseCircleFn(x,y);
    if(mainImage){
        animateCircles(e,x,y);
    }
    
})
// document.body.addEventListener('mouseleave',()=>{
//     mouseCircle.style.opacity='0';
//     mouseDot.style.opacity='0';
// })
//About Me Text
const aboutMeText=document.querySelector('.about-me-text')
const aboutMeTextContent='My name is Esteban Alejandro Duran Marti,I am an international student from Bolivia that graduated from the university of Arkansas with a Bachelor of Science in Computer Science on fall 2021. I started my career as a candidate for a bachelor’s in electrical engineering but once I took my first programming class, I found my passion for coding. I focused on mobile development after my first Internship with J.B Hunt. This internship developed my passion for mobile development, and I worked with a full-time development team using react native. After a year with J.B Hunt I had the opportunity to make an internship with a startup company called ObiiGo. I worked as a Junior Developer and my role was to maintain the mobile application and determine the priority on bugs, new features and develop them. I look forward to being the best developer that I can be and keep growing professionally. ';
console.info(Array.from(aboutMeTextContent));
if(aboutMeText){
    Array.from(aboutMeTextContent).forEach(char=>{
        const span= document.createElement('span');
        span.textContent=char;
        aboutMeText.appendChild(span);
        span.addEventListener('mouseenter',e=>{
            e.target.style.animation="aboutMeTextAnim 10s infinite";
        });
    });
}
//End of about me text

//Contact me page
let formHeading= document.querySelector(".form-heading");
const formInputs= document.querySelectorAll(".contact-form-input");
console.info(formInputs);

formInputs.forEach((input)=>{
    input.addEventListener('focus',()=>{
        formHeading.style.opacity="0";
        setTimeout(()=>{
            formHeading.textContent=`Your ${input.placeholder}`;
            formHeading.style.opacity=1;
        },300);
    },true);
});
formInputs.forEach((input)=>{
    input.addEventListener('blur',()=>{
        formHeading.style.opacity="0";
        setTimeout(()=>{
            formHeading.textContent="Let's Talk";
            formHeading.style.opacity=1;
        },300);
    },true);
});
// slideshow icons
const slideshow= document.querySelector(".slideshow")

setInterval(()=>{
    const firstIcon= slideshow.firstElementChild;
    firstIcon.classList.add("faded-out");
    const thirdIcon=slideshow.children[3];
    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");
    setTimeout(()=>{
        slideshow.removeChild(firstIcon);
        slideshow.appendChild(firstIcon);
        setTimeout(()=>{
            firstIcon.classList.remove("faded-out");
        },500)
    },500)
},3000)

