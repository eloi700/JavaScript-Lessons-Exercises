//Behavioral Pattern - MEDIATOR e.g. Chat Room (can be implemented like in socket.io). Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

//constructor to be used - for the user and for the chat room
const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

//User Prototype
User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to); // this pertaining to user
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};
const Chatroom = function(){
  let users = {}; //list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //Single user message
        to.receive(message, from);
      } else {
        //Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const eloi = new User('Eloi');
const andi = new User('Andi');
const sarah = new User('Sarah');
const john = new User('John');

const chatroom = new Chatroom();

chatroom.register(eloi);
chatroom.register(andi);
chatroom.register(sarah);
chatroom.register(john);

eloi.send('Hello Andi, my dear husband.', andi)
andi.send('Hello Eloi, my dear wife.', eloi)
sarah.send('Hello Sarah, my dear friend.', john)
john.send('Hello John, my dear mate.', sarah)
