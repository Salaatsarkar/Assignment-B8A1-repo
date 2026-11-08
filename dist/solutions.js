"use strict";
//! problem 1
const multiplyValue = (value, multiplier) => {
    if (value === 0 || multiplier === 0) {
        return 0;
    }
    else if (multiplier === undefined) {
        return value * 2;
    }
    else {
        return value * multiplier;
    }
};
// console.log(multiplyValue(10));
// console.log(multiplyValue(10,5));
// console.log(multiplyValue(7,0));
console.log(multiplyValue(0)); // 0
console.log(multiplyValue(0, 5)); // 0
console.log(multiplyValue(0, 0)); // 0
console.log(multiplyValue(0, -5)); // 0
console.log(multiplyValue(10, 0.5)); // 5
console.log(multiplyValue(10, -0)); // 0
