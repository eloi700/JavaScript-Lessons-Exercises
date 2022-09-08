//Singleton - e.g. one user at a time or to login
//The singleton pattern limits the number of instances of a particular object to just one.

const Singleton = (function(){
    let instance;

    //Private
    function createInstance(){
        const object = new Object({
            name: 'Sharon',
            age: 26,
            gender: 'female'
        });
        return object;
    }

    //Public
    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
//Note: Not to give more than one instance otherwise, it will just give back same instance

console.log(instanceA); // {name: 'Sharon', age: 26, gender: 'female'}
console.log(instanceA === instanceB); // true