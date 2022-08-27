/***
 * Easy HTTP Library
 * Library for making HTTP request
 *
 * @version 2.0.0
 * @author Eloi
 * @license MIT
 *
 **/

class EasyHTTP {

  //----------MAKE HTTP GET Request
  get(url) {
    //wrap the whole fetch into a Promise
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }


  //----------MAKE HTTP POST Request
  post(url, data) {
    //wrap the whole fetch into a Promise
    return new Promise((resolve, reject) => {
        //Post Object
      fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }


//----------MAKE HTTP PUT Request
put(url, data) {
    //wrap the whole fetch into a Promise
    return new Promise((resolve, reject) => {
        //Post Object
      fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

//----------MAKE HTTP DELETE Request
delete(url) {
    //wrap the whole fetch into a Promise
    return new Promise((resolve, reject) => {
        //Post Object
      fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
        //body remove coz not sending Data
      })
        .then((res) => res.json())
        .then(() => resolve('Resource Deleted...'))
        .catch((err) => reject(err));
    });
  }

}
