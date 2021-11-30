function fizzBuzz(num1, num2) {
    for (let i = 1; i <= 100; i++) {
        
        if (i % num1 == 0) {
            console.log("Fizz") 
        }
        else if  (i%num2 == 0) {
            console.log("Buzz")
        }
        else if (i % num1 == 0 && i % num2 == 0) {
            console.log("FIZZ BUZZ")
        }
        else {
            console.log(i)
        }
    }
        
    }

    fizzBuzz(2,9);