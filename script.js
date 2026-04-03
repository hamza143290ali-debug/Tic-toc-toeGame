const newGameBtn = document.querySelector(".new-btn");  
const Result = document.querySelector(".result"); 
const buttons = document.querySelectorAll(".boxes"); 

const clickSound=new Audio('./sound/hit.wav'); 
const btnClick=new Audio("./sound/button.mp3"); 

let turn = "O"; 

let winPattern = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]; 

// RESET GAME FUNCTION
function resetGame() {
    buttons.forEach(btn => {
        btn.innerText = "";
        btn.style.pointerEvents = "auto";
    });

    turn = "O";
    Result.innerText = "*****";
}

//  WINNER CHECK
function winner() {
    for (let pattern of winPattern) {

        let pos1 = buttons[pattern[0]].innerText; 
        let pos2 = buttons[pattern[1]].innerText; 
        let pos3 = buttons[pattern[2]].innerText; 

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            Result.innerText = `The winner is: ${pos1}`; 

            buttons.forEach(btn => btn.style.pointerEvents = "none");

           return 
        }
    }
}

// CLICK EVENTS
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
         clickSound.currentTime = 0; 
        clickSound.play();

        if (btn.innerText !== "") return;

        if (turn === "O") {
            btn.innerText = "O"; 
            turn = "X"; 
        } else {
            btn.innerText = "X"; 
            turn = "O"; 
        }

        btn.style.pointerEvents = "none"; 

        winner(); 
    });
});

// when ever you click on this button so you
//will see amazing sound effect and it will 
//reset the current game 
newGameBtn.addEventListener("click", ()=>{
    btnClick.currentTime=0; 
    btnClick.play(); 
    resetGame(); 
    
});






/*
That line of code creates a new Audio object in JavaScript and loads the sound file hit.wav from the ./sound/ directory. Essentially, it prepares the audio so you can play it later in your script.

Here’s how you might use it in practice:
File path: ./sound/hit.wav means the file is inside a folder named sound relative to your script.

Supported formats: Browsers typically support .wav, .mp3, and .ogg. Make sure your chosen format is compatible.

Playback control: You can use methods like .play(), .pause(), and properties like .volume or .loop.
*/