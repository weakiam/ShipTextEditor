//variables start
let textarea = document.querySelector('textarea');
let text = textarea.value;
const textbox = document.getElementById("textbox");
let fontSize = 40;
let fontSizeStep = 6;
let fontFamilies = ["Helvetica", "JetBrains Mono", "Times New Roman", "Ubuntu"];
let fontFamiliesShort = ["Helvetica", "JetBrains", "Times", "Ubuntu"];
let darkModeButton = ["light", "dark"];
let currentIndexDarkMode = 1;
let currentIndexFontFamilies = 3;
//variables end

//onload, put text cursor on the first char of the first line. start
window.onload = function () {
  textarea.focus();
  textarea.selectionStart = 0;
  textarea.selectionEnd = 0;
}
//onload, put text cursor on the first char of the first line. end

// font resizing feature start
function fontSizeFunc(button, operator) {
  button.addEventListener("click", () => {
    fontSize = eval(fontSize + operator + fontSizeStep);
    textbox.style.fontSize = fontSize + "px";
  })
}
fontSizeFunc(document.getElementById("incButton"), "+");
fontSizeFunc(document.getElementById("decButton"), "-");
//font resizing feature end

//changing fonts feature start
function fontsAreCool() {
  document.getElementById("fontButton").innerHTML = fontFamiliesShort[currentIndexFontFamilies];
  textbox.style.fontFamily = fontFamilies[currentIndexFontFamilies];
  currentIndexFontFamilies = (currentIndexFontFamilies + 1) % fontFamilies.length;
}

fontsAreCool();

document.getElementById("fontButton").addEventListener("click", () => {
  fontsAreCool();
})
// changing fonts feautre end

//alignment feature start
function align(alignment) {
  document.getElementById(alignment + "Align").addEventListener("click", () => {
    textbox.style.textAlign = alignment;
  })
}

align("left");
align("center");
align("right");
//alignment feature end

// dark/light mode button start
document.getElementById("lightButton").addEventListener("click", () => {
  document.body.classList.toggle("dlmode");
  document.getElementById("lightButton").innerHTML = darkModeButton[currentIndexDarkMode];
  currentIndexDarkMode = (currentIndexDarkMode + 1 ) % darkModeButton.length;
})

// dark/light mode button end