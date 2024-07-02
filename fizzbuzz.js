

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Hello World');
    let fbb = [3 : "Fizz"; 5 : "Buzz"; 7 : "Bang"]
    let str = ""
    for (let i = 1; i <=100; i++) {
        for (cont key in fbb) {
            if (i % key == 0) {
                str += fbb.key
            } else{
                str += i
            }
        }
    } 
    console.log(str)
        
}

// Now we run the main function...
fizzbuzz();
