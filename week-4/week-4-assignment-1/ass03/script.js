const evenAndOddNumberChecker = (number) => {
  if (number % 2 !== 0) {
    console.log(`${number} is an Odd Number`);
  } else if (number % 2 === 0) {
    console.log(`${number} is an Even Number`);
  }
};

evenAndOddNumberChecker(5);
evenAndOddNumberChecker(10);
