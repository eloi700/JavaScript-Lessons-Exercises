class easyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }
  // Make an HTTP Get Request
  //Arrow function it works this in ONLOAD however, another option would setting it into a variable called self (lexical this)
  // let self = this;
  get(url, callback) {
    this.http.open("GET", url, true);

    this.http.onload = () => {
      if (this.http.status === 200) {
        callback(null, this.http.responseText);
      }else{
        callback('Error:' + this.http.status)
      }
    };

    this.http.send();
  }
}
// Make an HTTP Post Request

// Make an HTTP Put Request

// Make an HTTP Delete Request
