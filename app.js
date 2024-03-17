// Changing the background color of a page in JavaScrip
const body = document.body;
const backgroundColors = [
    "#FF6347", // Tomato
    "#4682B4", // Steel Blue
    "#32CD32", // Lime Green
    "#FFD700", // Gold
    "#8A2BE2", // Blue Violet
    "#FFA500", // Orange
    "#00CED1", // Dark Turquoise
    "#FF69B4", // Hot Pink
    "#7CFC00", // Lawn Green
    "#9400D3"  // Dark Violet
  ];
body.style.backgroundColor = backgroundColors[0];
const btn = document.querySelector('button');
btn.addEventListener('click', bgChanger);
function bgChanger() {
    const colorIndx = parseInt(Math.random() * backgroundColors.length);
    body.style.backgroundColor = backgroundColors[colorIndx];
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

}