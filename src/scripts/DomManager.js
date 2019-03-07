const buildHtmlforAddress = (addressObject) => {
  return `
  <section>
      <h1>${addressObject.name}</h1>
      <div>${addressObject.address}</div>
  </section>
`
}


const listAddressOnDom = addressArray => {
  const container = document.querySelector("#addressList");

  container.innerHTML = "";
  // debugger
  addressArray.forEach(element => {
    container.innerHTML += buildHtmlforAddress(element)
  });
};
