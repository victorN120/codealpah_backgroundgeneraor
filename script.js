const colorDisplay = document.getElementById('colorDisplay');
const generateBtn = document.getElementById('generateBtn');
const customColorPicker = document.getElementById('customColorPicker');
const customColorBtn = document.getElementById('customColorBtn');
const colorCode = document.getElementById('colorCode');

function setRandomBackgroundColor() {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
}

function setBackgroundColor(color) {
    colorDisplay.style.backgroundColor = color;
    colorCode.value = color;
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateBtn.addEventListener('click', setRandomBackgroundColor);

customColorBtn.addEventListener('click', () => {
    const customColor = customColorPicker.value;
    setBackgroundColor(customColor);
});

setRandomBackgroundColor();
