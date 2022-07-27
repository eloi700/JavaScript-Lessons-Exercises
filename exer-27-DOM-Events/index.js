document.querySelector('.del-btn').addEventListener('click', (e) => {
    console.log('Hello World');
//To avoid the DEFAULT BEHAVIOUR ex. href-google instead of directing it to google, it will prevent to do so --> By adding event object (e) as param

    e.preventDefault();
})

//Adding Named Function
document.querySelector(".del-btn").addEventListener("click", onClick);

function onClick(e) {
  // console.log('Clicked');

  let val;
  val = e;
  val = e.target;
  val = e.target.className; // del-btn clear-btn
  val = e.target.classList; //DOM Token List

  // Event Type
  val = e.type; // click, mouseover etc

  //Event Timestamp
  val = e.timeStamp; // express in milliseconds - to get in seconds convert using: Math.floor(Date.now()/1000)
  val = new Date().getHours(); // 14 or 2pm

  //Coordinates Event Relative to the WINDOW
  val = e.clientY; //48
  val = e.clientX; // 131

  //Coordinates Event Relative to the ELEMENT itself
  val = e.offsetY; //1
  val = e.offsetX; //82
}

/************* MOUSE EVENTS *************/
const clearBtn = document.querySelector(".del-btn");
const container = document.querySelector(".container");
clearBtn.addEventListener("click", runEvent); //click
clearBtn.addEventListener("dblclick", runEvent); //double-click
clearBtn.addEventListener("mousedown", runEvent); //click and Hold
clearBtn.addEventListener("mouseup", runEvent); //click and release

//similar event to mouseenter & mouseleave - INTO main elem. only
container.addEventListener("mouseenter", runEvent); //enters the spec. elem
container.addEventListener("mouseleave", runEvent); //leaves the spec. elem

//difference - mouseover & mouseout goes even INSIDE of the spec elem.
container.addEventListener("mouseover", runEvent); //enters the spec. elem
container.addEventListener("mouseout", runEvent); //leaves the spec. elem
container.addEventListener("mousemove", runEvent); //fires up INSIDE the elem(card w/ btn)

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  const title = document.querySelector(".title");
  const frame = document.querySelector(".frame");
  title.textContent = `MouseX: ${e.offsetX} and MouseY: ${e.offsetY}`;
  frame.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, 40, .5 )`;
}

/************* KEYBOARD & INPUT EVENTS *************/
const formOne = document.querySelector(".form-1");
const taskInput = document.querySelector(".task");

//Submit Event
// formOne.addEventListener('submit', runEventKeyInput);

//Keydown, Keyup, Keypress Events
taskInput.addEventListener('keydown', runEventKeyInput)
taskInput.addEventListener('keyup', runEventKeyInput)
taskInput.addEventListener('keypress', runEventKeyInput)

//Focus Event
taskInput.addEventListener('focus', runEventKeyInput)

//Blur Event (Opposite of Focus)
taskInput.addEventListener('blur', runEventKeyInput)

//Paste Event
taskInput.addEventListener('paste', runEventKeyInput)

//Input Event
taskInput.addEventListener('input', runEventKeyInput)

//Change Event
taskInput.addEventListener('change', runEventKeyInput)

// Clear Input Value
taskInput.value = ""

function runEventKeyInput(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target);
    console.log(e.target.value);

    console.log(`Form Submitted! Time Stamp: ${e.timeStamp}`)

    //submit -prevent Default
    e.preventDefault();
}

