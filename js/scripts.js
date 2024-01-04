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

const main = document.getElementById('main');
const abc = document.getElementById('abc');
const func = document.getElementById('func');
const keypadBasic = document.getElementById('keypad-basic');
const keypadabc = document.getElementById('keypad-abc');
const keypadfunc = document.getElementById('keypad-func');

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



let previousCalculations = document.querySelectorAll('.prevCalcs');


document.addEventListener('DOMContentLoaded', function () {
    var mathField = document.getElementById('qsn1');
    var latex = document.getElementById('ans1');
    var MQ = MathQuill.getInterface(2);
    var mathFieldInstance = MQ.MathField(mathField, {
        spaceBehavesLikeTab: true,
        handlers: {
            edit: function () {
                var latexString = mathFieldInstance.latex();
                try {
                    // var variables=;
                    console.log(latexString);                    
                    var fn = evaluatex(latexString);
                    console.log(fn);
                    result = fn();
                    latex.innerHTML = Math.round(result * 100) / 100;
                    
                } catch (error) {
                    console.error('Error evaluating expression:', error);
                }
            }
        }
    });
});

