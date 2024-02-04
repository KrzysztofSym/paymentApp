// Add JavaScript code here
let slideImages = document.querySelectorAll('.card');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');
let navs = document.querySelectorAll('nav div');

let counter = 2;

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class 'dot'
    var dots = document.querySelectorAll(".dot");

    // Loop through each dot element
    dots.forEach(function(dot) {
        // Add click event listener
        dot.addEventListener("click", function() {
            // Call switchImage function passing 'this' as argument
            switchImage(this);
        });
    });
});

next.addEventListener('click', slideNext);
function slideNext(){
slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
if(counter >= slideImages.length-1){
    counter = 0;
}
else{
    counter++;
}
slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
indicators();
}

prev.addEventListener('click', slidePrev);
function slidePrev(){
slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
if(counter == 0){
    counter = slideImages.length-1;
}
else{
    counter--;
}
slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
indicators();
}

function autoSliding(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

container.addEventListener('mouseout', autoSliding);

function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
    }
    indicators();
}

navs.forEach(element => {
    element.addEventListener('click', ()=> {
       navs.forEach(navEl => {
        navEl.classList.remove('active');
       });
       element.classList.toggle('active');
    console.log("peace");
   });
});