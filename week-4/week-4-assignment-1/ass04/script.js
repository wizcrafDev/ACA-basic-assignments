const arrayNumber = [1, 3, 5, 7, 10];
const fruits = ["Fruits", "Apple", "Banana", "Orange"];
console.log("Array ==>", arrayNumber);

const addNumberAtEndOfArray = (num) => {
  arrayNumber.push(num);
  console.log(`Added number:${num} to array End`, arrayNumber);
};

addNumberAtEndOfArray(100);

const addNumberAtStartOfArray = (num) => {
  const newArrayNumber = [num, ...arrayNumber];
  console.log(`Added number:${num} to array Start`, newArrayNumber);
};

addNumberAtStartOfArray(200);
const removeLastNumberToArray = () => {
  arrayNumber.pop();
  console.log(`remove last number from array`, arrayNumber);
};

removeLastNumberToArray();

const getAndDeleteANumber = (num) => {
  let findNumber = arrayNumber.find((n) => n === num);
  arrayNumber.splice(arrayNumber.indexOf(findNumber), 1);
  console.log(`Number gotten : ${num} deleted from array: [${arrayNumber}]`);
};

getAndDeleteANumber(10);

const sumOfNumberInArray = () => {
  let sum = 0;
  for (let num of arrayNumber) {
    sum += num;
  }
  console.log(`Sum of number in array is ${sum}`);
};

sumOfNumberInArray();
