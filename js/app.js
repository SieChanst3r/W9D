//First custom function
function value(numberOne, numberTwo) {
    var sumNumber = (numberOne + numberTwo) * 5;
    return sumNumber;
}

var testOne = (2, 3);
var testOneResult = value(testOne)
console.log(testOne);
var testTwo = (5, 2);
var testTwoResult = value(testTwo);
console.log(testTwo)

//Second custom function
function StringLength(sum) {
    if (sum > 10) {
        return true;
    } else if (sum <= 10) {
        return false;
    } else {
        console.log("Something went wrong!")
    }
}

var stringOne = "Good morning sunshines!"
var resultOne = StringLength(stringOne.length)
console.log(resultOne)
var stringTwo = "no"
var resultTwo = StringLength(stringTwo.length)
console.log(resultTwo)



//Third custom function
function letterId(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].startsWith('Ph')) {
            return array[i];
        }
    }
}


var arrayInput = ["Bonjour", "Phoney", "Phobe", "Goodbye"];
var arrayResult = letterId(arrayInput);
console.log(arrayResult)