//Mouse circle 
const mouseCircle= document.querySelector(".mouse-circle");
const mouseDot= document.querySelector(".mouse-dot");
const mouseCircleFn=(x,y)=>{
    mouseCircle.style.cssText=`top:${y}px;left:${x}px;opacity:1`;
    mouseDot.style.cssText=`top:${y}px;left:${x}px;opacity:1`;

};
//End of Mouse Circle
//Animated Circles
const circles=document.querySelectorAll('.circle-1')
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
//end of animated Circles
document.body.addEventListener('mousemove',(e) =>{
    let x= e.clientX;
    let y= e.clientY;
    mouseCircleFn(x,y);
    animateCircles(e,x,y);
})
document.body.addEventListener('mouseleave',()=>{
    mouseCircle.style.opacity='0';
    mouseDot.style.opacity='0';
})
