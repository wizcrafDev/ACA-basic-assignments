const body = document.querySelector("body");

const changeBackground = () => {
  // generate random color
  // explanation: Math.random() will generate random number between 0 and 1 like
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // will generate random color like #f0f0f0
  body.style.backgroundColor = randomColor;
};

// generate random number between 0 and 1
console.log(Math.random()); // 0.00028915736872159314
// 16777215 is a 24-bit Color Representation of hexadecimal values its a constant if u want to get 6 digit hexadecimal value

console.log(0.00028915736872159314 * 16777215); // 4830.999999999999
// Math.floor() will remove decimal value return only integer value
console.log(Math.floor(4830.999999999999)); //4830
// toString(16) will convert integer value to hexadecimal value
console.log((4830).toString(16)); // 12de

// # + 12de = #12de which will be assigned to randomColor
//  randomColor will then be assigned to body background color using javascript e.g: body.style.backgroundColor = randomColor;

// 16777215 is a 24-bit Color Representation of hexadecimal values its a constant if u want to get 6 digit hexadecimal value
// 4095 is a 12-bit Color Representation of hexadecimal values its a constant if u want to get 3 digit hexadecimal value
// so we are multiplying Math.random() with 16777215 to get 6 digit hexadecimal value
// hexadecimal = 1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
// 8 bits 255 * 255 * 255 = 16777215
// 4 bits 16 * 16 * 16 = 4095
// 16777215 is the maximum value of hexadecimal value
