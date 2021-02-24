
 var nbElements = 50; // Number of stars & sparkles

 // CSS Classes available
 var shapes = ['sparkle', 'star'];
 var sizes = ['','medium', 'small'];
 var styles = ['', 'alt', 'alt2'];
 var animations = ['pulse', 'pulse-1', 'pulse-2', 'pulse-3'];
 
 // Random generating elements
 for(var i = 0; i < nbElements; i++){
   
   // Random styles
   var classes = shapes[rand(0,shapes.length)] + " ";
   classes += sizes[rand(0,sizes.length)] + " ";
   classes += styles[rand(0,styles.length)] + " ";
   classes += animations[rand(0,animations.length)];
   
   // Random position
   var style = "top:"+rand(0,100)+"%;left:"+rand(0,100)+"%;";
   
   $('body').append('<div class="'+classes+'" style="'+style+'"></div>');
 }
 
 function rand(min, max){
   return Math.floor((Math.random() * max) + min);
 }
 
 
 
 
 
 
 
 (function() {
   const wheel = document.querySelector('.wheel');
   const startButton = document.querySelector('.button');


   var texts = ["4500", "5200", "3820", "4800", "4500","5200", "3820", "4800", "4500", "3850"]

    btn = document.getElementById("myBtn"),
    text = document.getElementById("myText"),
    index = 0;

btn.addEventListener("click", changeText);
text.innerHTML = texts[0];

function changeText() {


    index++;
    index %= texts.length
    text.innerHTML = texts[index];
    

  console.log(texts[index])

  return texts[index]
   
    
}


let deg = 5000;


   startButton.addEventListener('click', () => {
    

  
    
      //  Disable button during spin
     startButton.style.pointerEvents = 'none';
       // Calculate a new rotation between 5000 and 10 000
     deg = changeText()
  
       // Set the transition on the wheel
     wheel.style.transition = 'all 10s ease-out';
      //  Rotate the wheel
     wheel.style.transform = `rotate(${deg}deg)`;
       // Apply the blur
     wheel.classList.add('blur');
   });

   wheel.addEventListener('transitionend', () => {
     // Remove blur
     wheel.classList.remove('blur');
       // Enable button when spin is over
     startButton.style.pointerEvents = 'auto';
        //Need to set transition to none as we want to rotate instantly
     wheel.style.transition = 'none';
       // Calculate degree on a 360 degree basis to get the "natural" real rotation
       // Important because we want to start the next spin from that one
       // Use modulus to get the rest value from 360
     const actualDeg = deg % 360;
       // Set the real rotation instantly without animation
     wheel.style.transform = `rotate(${actualDeg}deg)`;
   });
 })();







$(function() {
  var body = $('#starshine'),
      template = $('.template.shine'),
      stars =  500,
      sparkle = 20;
  
    
  var size = 'small';
  var createStar = function() {
    template.clone().removeAttr('id').css({
      top: (Math.random() * 100) + '%',
      left: (Math.random() * 100) + '%',
      webkitAnimationDelay: (Math.random() * sparkle) + 's',
      mozAnimationDelay: (Math.random() * sparkle) + 's'
    }).addClass(size).appendTo(body);
  };
 
  for(var i = 0; i < stars; i++) {
    if(i % 2 === 0) {
      size = 'small';
    } else if(i % 3 === 0) {
      size = 'medium';
    } else {
      size = 'large';
    }
    
    createStar();
  }
});
















let cars = [
  {
    "numero": "0",
    "foto": "./cdef"
 
  },
  {
    "color": "1",
    "type": "station wagon"

  }

  ,
  {
    "color": "2",
    "type": "station wagon"

  }


  ,
  {
    "color": "3",
    "type": "station wagon"

  }


  ,
  {
    "color": "4",
    "type": "station wagon"

  }


  ,
  {
    "color": "5",
    "type": "station wagon"

  }


  ,
  {
    "color": "6",
    "type": "station wagon"

  }
  

     ]


function getGift() {


  for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log([i].numero)
  }



  console.log(element)
}






