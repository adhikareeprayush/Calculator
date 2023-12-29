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