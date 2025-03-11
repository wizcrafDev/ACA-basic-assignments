let number = [1,2,3,4,5];

function addNumber(array, num){
 array.push(num);
 return number;
}
number = addNumber(number,6);
console.log(number);

function removeNumber(array){
 array.pop();
 return array;
}
 removeNumber(number);
console.log(number);

