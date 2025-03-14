const fizzBuzzBox = []
for (i =1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzBox.push("fizzBuzz");
    } else if (i % 3 === 0) {
        fizzBuzzBox.push("fizz");
    } else if (i % 5 === 0) {
        fizzBuzzBox.push("Buzz");
    } else {
        fizzBuzzBox.push(i);
    }
}
console.log(fizzBuzzBox);