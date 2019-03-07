// fetch("http://localhost:8088/addresses")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(parsedResponse) {
//     return listAddressOnDom(parsedResponse);
//   });

const getAddresses = () => {
  return fetch("http://localhost:8088/addresses")
  .then(response => response.json())
}

const postAddress = (newAddressObject) => {
  return fetch("http://localhost:8088/addresses", {
    method: "POST",
    body: JSON.stringify(newAddressObject),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
}
