document.addEventListener("DOMContentLoaded", function(){

    // get all typing animation
    var typingAnimationList = document.getElementsByClassName("typing-animation");

    // add events
    Array.prototype.forEach.call(typingAnimationList, function(element) {
        setAnimation(
            element, 
            element.getAttribute("data-speed"), 
            element.getAttribute("data-text")
        );
    });
})

// set animation for element text
var setAnimation = function(element, speed, string){

    let len = string.length+1;
    let index = 0;
    
    var interval = setInterval(function(){ 
        element.textContent = string.slice(0, index);
        index++;
        if(index >= len){
            clearInterval(interval);
        }
    }, 100);
    
    
}