function evalNumber(){
    var inputValue = prompt("Enter an five-digit number without commas")
    if (isNaN(inputValue)) {
        alert(inputValue + "is not a number.")
    }  
    else if(inputValue % 2 ==0) {
        alert(inputValue + " is an even number.")
    } else { 
       alert(inputValue + " is an odd number.")
    }}

function minute(){
    var minuteOfHour = new Date().getMinutes()
    var hour = new Date().getHours()
    var currentMinute = ((hour * 60) + minuteOfHour)

    {alert("It's minute " + currentMinute + " of today." )
}}

function catGuide()
function vanishTitle(){
    let selectedElement = document.getElementById("sampleText").style.display = "none";   }