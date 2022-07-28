//BUBBLING, CAPTURING, DELEGATION EVENT
//When an event happens on Element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
//      <div>
//          <p></p>
//          <button></button> -> HERE'S THE EVENT
//          <span></span>
//      </div>
//BUBBLING Event - From button, p to div (parent) ->Going UP to the Parent
//CAPTURING Event - From div, p to button --> Going DOWN to the handler.

//STOP BUBBLING - USING event.stopPropagation() BUT it is NOT RECOMMENDED

// document.querySelector('.form-title').addEventListener('click', () =>{
//     console.log('Form Title');
// })

// document.querySelector('.form-1').addEventListener('click', () =>{
//     console.log('Form Parent');
// })

// document.querySelector('.frame').addEventListener('click', () =>{
//     console.log('Frame');
// })

// document.body.addEventListener('click', () =>{
//     console.log('Body');
// })

//By clicking the Title Form - all above were called and the output is Form Title, Form Parent, Frame and Body consecutively.--> Bubbling (Effect Goes Up)

//DELEGATION - ALL LINK DEALING WITH ITS PARENT
document.body.addEventListener('click', deleteItem);

function deleteItem(e){

    // if(e.target.parentElement.className === 'delete-item'){
    //     console.log('delete-item');
    // }//--> this won't work

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }
}

