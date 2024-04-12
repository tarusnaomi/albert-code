// write a function to calculate the area of a square given the base

function calculateSquare(baselength) {
  let area = baselength * baselength;

  console.log(
    "The area of a square whose base/side is " + baselength + " is " + area
  );
  return area;
}

let result1 = calculateSquare(5);
let result2 = calculateSquare(50);
let res = calculateSquare(32);
console.log(result1);

// runcode
// expect a return value/ result
