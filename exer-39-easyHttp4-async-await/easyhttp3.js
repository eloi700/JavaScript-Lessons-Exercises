/***
 * Easy HTTP Library
 * Library for making HTTP request
 *
 * @version 3.0.0
 * @author Eloi
 * @license MIT
 *
 **/

class EasyHTTP {
  //----------MAKE HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //----------MAKE HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //----------MAKE HTTP PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  }

  //----------MAKE HTTP DELETE Request
  async delete(url) {
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resData = "Resource Deleted. . .";
    return resData;
  }
}
