class easyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  // Make an HTTP Get Request
  //Arrow function it works this in ONLOAD however, another option would setting     it into a variable called self (lexical this)...let self = this;

  get(url, callback) {
    this.http.open("GET", url, true);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      } else {
        callback("Error:" + this.http.status);
      }
    };

    this.http.send();
  }

  // Make an HTTP Post Request
    post(url, data, callback) {
      this.http.open("POST", url, true);
      this.http.setRequestHeader("Content-type", "application/json");

      this.http.onload = () => {
        callback(null, this.http.responseText);
      };

      this.http.send(JSON.stringify(data));
    }

  // Make an HTTP Put Request / Updating the Data
  put(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");

    this.http.onload = () => {
      callback(null, this.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

// Make an HTTP Delete Request
delete(url, callback){
    this.http.open("DELETE", url, true);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, 'Post Deleted'); // just an object
      } else {
        callback("Error:" + this.http.status);
      }
    };

    this.http.send();
  }
}