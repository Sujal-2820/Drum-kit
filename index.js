
// responding to button press
var noOfButtons = document.querySelectorAll(".drum").length;

for(var i=0; i < noOfButtons; i++){                           //to apply event listner to all the 7 buttons

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){           //"click" is a keyword which detects clicking 

        //this.style.color = "white";                         //changing the font color inside the buttons when clicked
        
        var buttonsInnerHTML = this.innerHTML;                //targetting particular concerned HTML statement when button is clicked
        makeSound(buttonsInnerHTML);                          //calling makeSound function for button press
        
        buttonAnimation(buttonsInnerHTML);
    });
}



//responding to pressing keys on keyboard
document.addEventListener("keypress", function(event){          //addEventListner is a higher order function as it takes another function "function(event) as input"
    makeSound(event.key);                                       //"keypress" is a keyword which detects pressing a key,     "event" registers which key is pressed
                                                                //calling makeSound function for keys pressed.
    buttonAnimation(event.key);                            
})




// function to make sound 
function makeSound(key){
    switch(key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

        case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;
        
        case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
            break;

        case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
        
        default:
            console.log(key);
            break;
    }
    
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);               // eg.  ".w", ".k"  -->  in order to implement dot before class name
    activeButton.classList.add("pressed");                                     // adding class "pressed" to activeButton.

    //Now in order to remove the animation after certain specified time
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);                                                                    //100 milliseconds --> 0.1 seconds

}
