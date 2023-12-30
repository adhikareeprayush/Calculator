let abc = document.getElementById('abc');
let func = document.getElementById('func');


//code if the main is clicked or is active
const main = document.getElementById('main');
main.addEventListener('click', function () {
    document.querySelector('.buttons').style.display = 'flex';
    document.querySelector('.keyboard').style.display = 'none';
    document.querySelector('.functions').style.display = 'none';
    main.classList.add('active');
    abc.classList.remove('active');
    func.classList.remove('active');
});

//code if the abc is clicked or is active
abc.addEventListener('click', function () {
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.keyboard').style.display = 'flex';
    document.querySelector('.functions').style.display = 'none';
    main.classList.remove('active');
    abc.classList.add('active');
    func.classList.remove('active');
});

//code if the func is clicked or is active
func.addEventListener('click', function () {
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.keyboard').style.display = 'none';
    document.querySelector('.functions').style.display = 'flex';
    main.classList.remove('active');
    abc.classList.remove('active');
    func.classList.add('active');
});











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
