/* If you're feeling fancy you can add interactivity 
    to your site with Javascript 
const button1 = document.getElementById('button1');
const sound1 = new Audio('https://cdn.glitch.global/190edeb3-72d9-468f-852a-0f1f949dddd7/dogWhistle.mp3?v=1742057307889');
button1.addEventListener('click', function() {
  sound1.play();  
});

const button2 = document.getElementById('button2');
const sound2 = new Audio('dogWhistle.mp3');
button2.addEventListener('click', function() {
  sound2.play();  
});
*/

function pauseAudio() { 
  vomiting.pause();
  dogWhistle.pause(); 
  nailsOnChalkboard.pause();
  babyCrying.pause();
  smokeAlarmBatteryLow.pause();
  microphoneFeedback.pause();
  scream.pause();
} 

var dogWhistle = document.getElementById("button1"); 

function runButton1() { 
  dogWhistle.play(); 
} 

var nailsOnChalkboard = document.getElementById("button2");

function runButton2() { 
  nailsOnChalkboard.play(); 
}

var vomiting = document.getElementById("button3");

function runButton3() { 
  vomiting.play(); 
}

var babyCrying = document.getElementById("button4");

function runButton4() { 
  babyCrying.play(); 
}

var smokeAlarmBatteryLow = document.getElementById("button5");

function runButton5() { 
  smokeAlarmBatteryLow.play(); 
}

var scream = document.getElementById("button6");

function runButton6() { 
  scream.play(); 
}

var microphoneFeedback = document.getElementById("button7");

function runButton7() { 
  microphoneFeedback.play(); 
}

const evilButton = document.getElementById('evil-button');

evilButton.addEventListener('click', () => {
  alert('nice try')
  window.close()
});
