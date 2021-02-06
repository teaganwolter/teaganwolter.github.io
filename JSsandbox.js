function evalNumber(){
    var inputValue = prompt("Enter an five-digit number without commas")
    if (isNaN(inputValue)) {
        alert(inputValue + "is not a number.")
    }
    else if(inputValue % 2 ==0) {
        alert(inputValue + " is an even number.")
    } else { 
       alert(inputValue + " is an odd number.")
    }

function minute(){
    let start = Date.now()
    doSomethingForALongTime()
    let end = Date.now()
    let elapsed = end - start
}