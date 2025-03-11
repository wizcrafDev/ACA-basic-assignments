function gradeResult (result) {

    
 if (result > 100) {
    console.log("Enter a valid reult")
 }
 else if (result > 89 || result == 100) {
    console.log("A")
 }
 else if (result > 79 && result <= 89) {
    console.log("B")
 }
 else if (result > 69 && result <= 79) {
    console.log("C")
 }
 else if (result > 59 || result == 69) {
    console.log("D")
 }
 else if (result < 58 || result == 0) {
    console.log("F")
 }

}

gradeResult(0);

