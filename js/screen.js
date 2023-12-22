//starting value of screen is null
screen.value = "";

//function to read the numbers
numbers = document.querySelectorAll(".number");
numbers.forEach(function(number) {
    number.addEventListener("click", function() {
        displayNum(number.innerHTML);
    });
});

//function to read operators
operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
    operator.addEventListener("click", function() {
        displayNum(operator.innerHTML);
    });
});

//function to display numbers on screen
function displayNum(num) {
    var screen = document.getElementById("screen");
    screen.innerHTML += num;
}


//execute the caluclation when equals is pressed
equals = document.getElementById("equals");
equals.addEventListener("click", function() {
    var screen = document.getElementById("screen");
    screen.innerHTML = eval(screen.innerHTML);
});


