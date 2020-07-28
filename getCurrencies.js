bton = document.getElementById("submit");
bton.addEventListener(
  "click",
  function () {
    input = document.getElementById("currencyInput");
    input.value = input.value.toUpperCase();
    text = input.value;
    url = "https://api.binance.com/api/v3/ticker/price?symbol=" + text;
    let promise = fetch(url)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        input = document.getElementById("value").innerText = data.price;
      })
      .catch(function (err) {
        document.getElementById("value").innerText =
          "The symbol of the currency is not valid, please input a valid symbol.";
      });
  },
  false
);
