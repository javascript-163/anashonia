function multiplyBy(factor) {
    console.log(factor, "step 1");

    function abc() {}
    
    return function (number) {
        console.log(number, "step 2");
        return number * factor;
    }
};

// console.log(multiplyBy(3), "result 1");
const multiplyData = multiplyBy(2);
console.log(multiplyData(5), "result 2"); 