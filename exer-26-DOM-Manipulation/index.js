//DOM - representation of HTML (Document Object Model)
let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.documentElement;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;

val = document.images;

val = document.scripts;
// val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArr = Array.from(scripts); //converting below into an Array
scriptsArr.forEach(script => {
    console.log(script)
})

//DOM SELECTORS FOR SINGLE ELEMENTS
/*-----document.getElementById('name-btn')----- */
/*-----document.querySelector('.name-btn')----- */
/*-----document.getElementById('name-btn').id----- *///turns name-btn
/*-----document.getElementById('name-btn').className----- */

//Styling
/*-----document.getElementById('name-btn').style.background = '#000'---- */
/*-----document.getElementById('name-btn').style.color= '#fff'----- */
/*-----document.getElementById('name-btn').style.padding= '5px'----- */


//DOM SELECTORS FOR MULTIPLE ELEMENTS
/*-----document.getElementsByClassName('.collection-item')----- */
/*-----document.getElementsByTagName('li')----- */
/*-----document.querySelectorAll('.collection-item')----- */

//CONVERT HTML COLLECTION INTO ARRAY
/*-----listCollection = Array.from(listCollection)----- */

//TRAVERSING THE DOM - MOVING UP & DOWN THE ELEMENT
const list = document.querySelectorAll('ul.collection');//-parent
const listItem = document.querySelector('li.collection-item:first-child')

//Get child nodes
val = list.childNodes; //text Nodes etc are also considered (the lines)

//Get children Element nodes
val = list.children // shows only the children
val = list.firstChild;
val = list.firstElementChild;
val = list.lastElementChild;

//Count Child Elements
val = list.childElementCount;


//Get Parent Node
// val = listItem.parentNode;
// val = listItem.parentElement;

//Get Next/Previous Sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


//CREATING ELEMENTS
const li = document.createElement('li');
const listAll = document.querySelectorAll('li')
const ulParent = document.querySelector('.parent-items')
const link = document.querySelectorAll('.link')
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item')
li.appendChild(document.createTextNode('Hello World!'));
li.textContent = 'Hello World! -TextContent';
ulParent.appendChild(li);

//REPLACE ELEMENT
const newHeading = document.createElement('h2')
newHeading.id = "newTitle"
newHeading.textContent = "Task List"
const oldHeading = document.querySelector('.title')
//Getting Parent Element of oldHeading
const frame = document.querySelector('.frame');
// Replace OldHeading with NewHeading
frame.replaceChild(newHeading, oldHeading)

//REMOVE ELEMENT
//Remove Items in the li from ul
listAll[0].remove()// Removes Item-1
//Remove the Child Element of ul
ulParent.removeChild(listAll[3]); // Removes Item-4

//ADD & REMOVE CLASSLIST/CLASSNAME
newHeading.classList.add('test-title');
newHeading.classList.remove('test-title');

//ADD & REMOVE ATTRIBUTES
valAttr = newHeading.getAttribute('id');
valAttr = link[2].getAttribute('href'); // #
valAttr = link[2].getAttribute('class'); //link test-item3
valAttr = link[0].setAttribute('href', 'http://google.com');
valAttr = link[4].hasAttribute('id'); //false
valAttr = link[3].hasAttribute('class'); //true
valAttr = link[1].setAttribute('title', 'Google Link')
link[1].removeAttribute('title');

console.log(valAttr);

