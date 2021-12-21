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
if(slideshow){
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
}

const form=document.querySelector('.contact-form');
const username=document.getElementById('name');
const email=document.getElementById('email');
const subject=document.getElementById('subject');
const message=document.getElementById('message');
const messages= document.querySelectorAll(".message");

const succes=(input)=>{
    input.nextElementSibling.classList.remove("error");
}
const error=(input,message)=>{
    input.nextElementSibling.classList.add("error");
    input.nextElementSibling.textContent=message;
}
const checkRequiredFields=(inputArr)=>{
    inputArr.forEach(input=>{
        if(input.value.trim()===""){
            error(input,`${input.id} is required`)
        }
    })
}
const checkemail=(input)=>{
    const regEx= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(input.value.trim())){
        succes(input);
    }else{
        error(input,"Email is not valit");
    }
}
const checkLength=(input,min)=>{
    if(input.value.trim().length<min){
        error(input,`${input.id} must be at least ${min} characters`)
    }else{
        succes(input);
    }
};
if(form){
    form.addEventListener("submit",e=>{
        checkLength(username,3);
        checkLength(subject,3);
        checkLength(message,20);
        checkemail(email);
        checkRequiredFields([username,email,subject,message]);
        const notValid=Array.from(messages).find((message)=>{
            return message.classList.contains("error")
        });
        notValid&&e.preventDefault();
    });
}
//projects
// Projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn");

projects.forEach((project, i) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });

  project.addEventListener("mouseleave", () => {
    project.firstElementChild.style.top = "2rem";
  });

  // Big Project Image
  project.addEventListener("click", () => {
    const bigImgWrapper = document.createElement("div");
    if(bigImgWrapper){
        bigImgWrapper.className = "project-img-wrapper";
        container.appendChild(bigImgWrapper);

        const bigImg = document.createElement("img");
        bigImg.className = "project-img";
        const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];
        bigImg.setAttribute("src", `${imgPath}-big.jpg`);
        bigImgWrapper.appendChild(bigImg);
        document.body.style.overflowY = "hidden";

        projectHideBtn.classList.add("change");

        projectHideBtn.onclick = () => {
        projectHideBtn.classList.remove("change");
        bigImgWrapper.remove();
        document.body.style.overflowY = "scroll";

        };
    }
  });
  // End of Big Project Image

  i >= 6 && (project.style.cssText = "display: none; opacity: 0");
});