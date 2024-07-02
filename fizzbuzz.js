

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Hello World');

    let fbb = {3 : "Fizz", 5 : "Buzz", 7 : "Bang"}

    for (let i = 1; i <= 100; i++) {
        let word = ""
        for (let key in fbb) {
            if (i % key == 0) {
                word += fbb[key]
            }
        } 
        if (word == "") {
            console.log(i)
        }
        else {
            console.log(word)
        }
    }        
}

// Now we run the main function...
fizzbuzz();
