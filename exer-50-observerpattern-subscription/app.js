/** OBSERVER PATTERN
 * A typical example is a Subscription (Using Prototypes & ES6 Classes)
 * With 3 Methods (subscribe, unsubscribe, fire functions)
 */

function EventObserver() {
  this.observers = [];
}

// Event Observers
EventObserver.prototype = {
  //below creates new EventObserver() function

  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You're now subscribe to ${fn.name}`); //click handler
  },
  unsubscribe: function (fn) {
    //Filter out from the list whatever matches the callback function.  If there is no match the callback gets to stay on the list.  The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You're now unsubscribe to ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  },
};

// Instantiate new event observer
const click = new EventObserver();

//Event Listeners - Milliseconds (Subscribe & Unsubscribe)
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurrentMs);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurrentMs);
});

//Event Listeners - Seconds (Subscribe & Unsubscribe)
document.querySelector(".sub-s").addEventListener("click", function () {
  click.subscribe(getCurrentSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function () {
  click.unsubscribe(getCurrentSeconds);
});

//Event Listeners - fire
document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

//Click Handler - Milliseconds
const getCurrentMs = function () {
  //getCurrentMs (fn.name)
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

//Click Handler - Seconds
const getCurrentSeconds = function () {
  //getCurrentSeconds (fn.name)
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
