const userDetails = {
    name: "Eloi",
    address: {
        city: "Dresden",
        country: "Germany",
        zip: 172042
    }
  }

  const newUserDetails = {...userDetails, id: 001}
  console.log(userDetails); // original
  console.log(newUserDetails); // copy - appended id