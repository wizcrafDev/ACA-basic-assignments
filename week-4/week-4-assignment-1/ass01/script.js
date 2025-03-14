const convertCelsiusToFahrenheit = (temperature) => {
  let celsius = (temperature * 9) / 5 + 32;
  console.log("converted from celsius to fahrenheit:", celsius);
};

convertCelsiusToFahrenheit(30);
convertCelsiusToFahrenheit(40);

const convertFahrenheitToCelsius = (temperature) => {
  let fahrenheit = ((temperature - 32) * 5) / 9;
  console.log("converted from fahrenheit to celsius:", fahrenheit);
};

convertFahrenheitToCelsius(86);
convertFahrenheitToCelsius(104);
