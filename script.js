// Creating an image slider function 
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let index = 1; 
let isTransitioning = false;
let autoSlideInterval;
function updateSlidePosition(){
    slides.style.transition='transform 1s ease-in-out';
    slides.style.transform=`translateX(-${index * 20}%)`;
}
function moveToNextSlide(){
    if (isTransitioning) return;
    isTransitioning=true;
    index++;
    updateSlidePosition();
}
function moveToPrevSlide(){
    if (isTransitioning) return;
    isTransitioning=true;
    index--;
    updateSlidePosition();
}
document.getElementById('next').addEventListener('click',()=>{
    clearInterval(autoSlideInterval);  
    moveToNextSlide();
    autoSlideInterval=setInterval(moveToNextSlide,6000);
});
document.getElementById('prev').addEventListener('click',()=>{
    clearInterval(autoSlideInterval); 
    moveToPrevSlide();
    autoSlideInterval=setInterval(moveToNextSlide,6000); 
});
slides.addEventListener('transitionend',()=>{
    isTransitioning=false;
    if (index===0){
        slides.style.transition='none';
        index=slide.length-2;
        slides.style.transform=`translateX(-${index * 20}%)`;
    }else if (index===slide.length-1) {
        slides.style.transition='none';
        index=1;
        slides.style.transform=`translateX(-20%)`;
    }
    setTimeout(()=>{
        slides.style.transition='transform 0.5s ease-in-out';
    });
});
slides.style.transform=`translateX(-20%)`;
autoSlideInterval=setInterval(moveToNextSlide,6000);
slides.addEventListener('mouseover',()=>{
    clearInterval(autoSlideInterval);
});
slides.addEventListener('mouseout',()=>{
    autoSlideInterval=setInterval(moveToNextSlide, 6000);
});