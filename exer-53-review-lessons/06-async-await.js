
// a promise
const myProm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
});

// async function
async function perfomAsyncAwait() {
  try {
    // wait until the promise resolves
    let result = await myProm;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// calling the async function
perfomAsyncAwait(); //Promise resolved