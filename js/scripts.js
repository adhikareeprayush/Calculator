//function to toogle the deg and radians
function toggleOption(option) {
    const degOption = document.querySelector('.toggle-option:nth-child(1)');
    const radOption = document.querySelector('.toggle-option:nth-child(2)');
    const slider = document.querySelector('.toggle-slider');

    if (option === 'deg') {
        degOption.classList.add('active');
        radOption.classList.remove('active');
        slider.style.left = '0'; // Adjusted the left position
    } else if (option === 'rad') {
        degOption.classList.remove('active');
        radOption.classList.add('active');
        slider.style.left = '50%'; // Adjusted the left position
    }
}

let main = document.getElementById('main');
let abc = document.getElementById('abc');
let func = document.getElementById('func');
let keypadBasic = document.getElementById('keypad-basic');
let keypadabc = document.getElementById('keypad-abc');
let keypadfunc = document.getElementById('keypad-func');

function toggleKeypad(keypadId, buttonId) {
    // Hide all keypads
    keypadBasic.style.display = 'none';
    keypadabc.style.display = 'none';
    keypadfunc.style.display = 'none';

    // Remove 'active' class from all buttons
    main.classList.remove('active');
    abc.classList.remove('active');
    func.classList.remove('active');

    // Show the selected keypad
    document.getElementById(keypadId).style.display = 'grid';

    // Add 'active' class to the clicked button
    document.getElementById(buttonId).classList.add('active');
}

// Add event listeners using the toggleKeypad function
main.addEventListener('click', function () {
    toggleKeypad('keypad-basic', 'main');
});

abc.addEventListener('click', function () {
    toggleKeypad('keypad-abc', 'abc');
});

func.addEventListener('click', function () {
    toggleKeypad('keypad-func', 'func');
});


//Code to change the case of the letters
let keys = document.querySelectorAll('.letter')
let up = document.getElementById('up');
up.addEventListener('click', function () {
    keys.forEach(key => {
        if(key.innerHTML == key.innerHTML.toUpperCase()){
            key.innerHTML = key.innerHTML.toLowerCase();
    }else{
        key.innerHTML = key.innerHTML.toUpperCase();
    }})
});

