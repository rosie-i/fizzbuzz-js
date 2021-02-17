// If a number is a multiple of 13, print "Fezz" instead of the number. 
// For multiples of most other numbers, the Fezz goes immediately in front of the first thing beginning with B, or at the end if there are none. 
// (E.g. 5 * 13 = 65: "FezzBuzz", 3 * 5 * 13 = 195: "FizzFezzBuzz"). Note that Fezz should be printed even if Bong is also present (E.g. 11 * 13 = 143: "FezzBong")

// If a number is a multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed. (E.g. 3 * 5 * 17 = 255: "BuzzFizz")





// Here, we create our main function.
function fizzbuzz() {

    
    for (let i = 1; i <= 105; i++) {
        let result = [];

        // FizzBuzz if divisible by 3 & 5
        if (isDivisibleBy3(i) && isDivisibleBy5(i)){
            result.push("FizzBuzz");

            // If also divisible by 7, append Bang to end
            addBangIfDivisibleBy7(i, result);
        } 

        // Fizz if divisible by 3
        else if (isDivisibleBy3(i))
        {
            result.push("Fizz");

            // If also divisible by 7, append Bang to end
            addBangIfDivisibleBy7(i, result);
        } 

        // Buzz if divisible by 5
        else if (isDivisibleBy5(i))
        {
            result.push("Buzz");

            // If also divisible by 7, append Bang to end
            addBangIfDivisibleBy7(i, result);
        } 

        // Bang if divisible by 7
        else if (isDivisibleBy7(i)) 
        {
            result.push("Bang");
        } 

        // Else return current number
        else 
        {
            result.push(i);
        }

        // If divisible by 11, replace current answer with 'Bong'
        if (isDivisibleBy11(i)){
            result = ["Bong"];
        }


        // Print final result
        console.log(i + ":", result.join(""));
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

function isDivisibleBy11(i) {
    return !(i % 11);
}

function isDivisibleBy13(i) {
    return !(i % 13);
}

function addBangIfDivisibleBy7(i, result){
    // If i is divisible by 7, append Bang
    if (isDivisibleBy7(i)){
        result.push ("Bang");
    }

    return;
}