// If a number is a multiple of 7, print "Bang" instead of the number. 
// For numbers which are multiples of seven and three / five, append Bang to what you'd have printed anyway. (E.g. 3 * 7 = 21: "FizzBang").

// If a number is a multiple of 11, print "Bong" instead of the number. Do not print anything else in these cases. (E.g. 3 * 11 = 33: "Bong")

// If a number is a multiple of 13, print "Fezz" instead of the number. 
// For multiples of most other numbers, the Fezz goes immediately in front of the first thing beginning with B, or at the end if there are none. 
// (E.g. 5 * 13 = 65: "FezzBuzz", 3 * 5 * 13 = 195: "FizzFezzBuzz"). Note that Fezz should be printed even if Bong is also present (E.g. 11 * 13 = 143: "FezzBong")

// If a number is a multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed. (E.g. 3 * 5 * 17 = 255: "BuzzFizz")





// Here, we create our main function.
function fizzbuzz() {

    let result;
    
    for (let i = 1; i <= 105; i++) {
        // FizzBuzz if divisible by 3 & 5
        if (isDivisibleBy3(i) && isDivisibleBy5(i)){
            result = "FizzBuzz";

            // If also divisible by 7, append Bang to end
            result = addBangIfDivisibleBy7(i, result);
        } 
        // Fizz if divisible by 3
        else if (isDivisibleBy3(i))
        {
            result = "Fizz";

            // If also divisible by 7, append Bang to end
            result = addBangIfDivisibleBy7(i, result);
        } 

        // Buzz if divisible by 5
        else if (isDivisibleBy5(i))
        {
            result = "Buzz";

            // If also divisible by 7, append Bang to end
            result = addBangIfDivisibleBy7(i, result);
        } 

        // Bang if divisible by 7
        else if (isDivisibleBy7(i)) 
        {
            result = "Bang";
        } 

        // Else return current number
        else 
        {
            result = i;
        }

        // Print final result
        console.log(result);
    }

}

// Now we run the main function...
fizzbuzz();


function isDivisibleBy3(i) {
    return !(i % 3);
}

function isDivisibleBy5(i) {
    return !(i % 5);
}

function isDivisibleBy7(i) {
    return !(i % 7);
}

function addBangIfDivisibleBy7(i, result){
    // If i is divisible by 7, append Bang
    if (isDivisibleBy7(i)){
        result += "Bang";
    }

    return result;
}