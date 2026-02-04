//STEP 1
function halfNumber(number){
    const result = number / 2;
    console.log("Half of " + number + " is " + result);
    return result;
}
halfNumber(5);

//STEP 2
function squareNumber(number){
    const result = number * number;
    console.log("The result of squaring the number " + number + " is " + result);
    return result;
}
squareNumber(3);

//STEP 3
function percentOf(number1, number2){
    const result = (number1 / number2) * 100;
    console.log(number1 + " is " + result + "% of " + number2);
    return result;
}
percentOf(2, 4);

//STEP 4
function findModulus(number1, number2){
    const result = number1 % number2;
    console.log(result + " is the modulus of " + number1 + " and " + number2);
    return result;
}
findModulus(10, 4); 

