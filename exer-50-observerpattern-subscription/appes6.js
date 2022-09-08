/** OBSERVER PATTERN---ES6 */

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You're now subscribe to ${fn.name}`); //click handler
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You're now unsubscribe to ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
      item.call();
    });
  }
}

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
