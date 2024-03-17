// Changing the background color of a page in JavaScrip
const body = document.body;
const btn = document.querySelector('button');
const colorContent = document.getElementById('colorContent');

const backgroundColors = [
    { color: "#FF6347", name: "Tomato" },
    { color: "#4682B4", name: "Steel Blue" },
    { color: "#32CD32", name: "Lime Green" },
    { color: "#FFD700", name: "Gold" },
    { color: "#8A2BE2", name: "Blue Violet" },
    { color: "#FFA500", name: "Orange" },
    { color: "#00CED1", name: "Dark Turquoise" },
    { color: "#FF69B4", name: "Hot Pink" },
    { color: "#7CFC00", name: "Lawn Green" },
    { color: "#9400D3", name: "Dark Violet" }
];

body.style.backgroundColor = backgroundColors[0].color;
showSelectedColor(backgroundColors[0].name);
btn.style.backgroundColor = backgroundColors[2].color;

btn.addEventListener('click', bgChanger);
function bgChanger() {
    const selectedColor = backgroundColors[parseInt(Math.random() * backgroundColors.length)];
    body.style.backgroundColor = selectedColor.color;
    showSelectedColor(selectedColor.name);
    btnColorChanger();
}  

function btnColorChanger() {
    btn.style.backgroundColor = backgroundColors[parseInt(Math.random() * backgroundColors.length)]
}

btn.addEventListener('mouseenter', hoverEffect);

function hoverEffect() {
    const btnColor = getComputedStyle(btn)['background-color'];
    const bodyColor = getComputedStyle(body)['background-color'];

    btn.style.backgroundColor = bodyColor;
    body.style.backgroundColor = btnColor;
    
    const selectedColor = backgroundColors.find(currObj => currObj.color.toLowerCase() === rgbToHex(btnColor).toLowerCase());
    
    if(selectedColor) {
        showSelectedColor(selectedColor.name);
    }else {
        console.warn('color not found')
    }
}

function showSelectedColor(colorName) {
    colorContent.innerText = "Your background color is " + colorName;
    colorContent.style.color = 'white';
}

function rgbToHex(rgbColor) {
    // Split the RGB string to get the individual color components
    const rgbValues = rgbColor.match(/\d+/g);

    // Convert decimal RGB values to hexadecimal
    const hexR = parseInt(rgbValues[0]).toString(16).padStart(2, '0');
    const hexG = parseInt(rgbValues[1]).toString(16).padStart(2, '0');
    const hexB = parseInt(rgbValues[2]).toString(16).padStart(2, '0');

    // Concatenate hexadecimal values with '#' symbol
    return `#${hexR}${hexG}${hexB}`;
}
