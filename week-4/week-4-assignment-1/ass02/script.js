const gradeCalculator = (score) => {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

gradeCalculator(100); // A
gradeCalculator(80); // B
gradeCalculator(70); // C
gradeCalculator(60); // D
gradeCalculator(50); // F
