var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var resetButton = document.getElementById("reset");

function convertTemperature() {
    let c = parseFloat(cel.value) || 0;
    let f = (c * 9 / 5) + 32;
    fah.value = f.toFixed(2);
}

cel.addEventListener('input', convertTemperature);
fah.addEventListener('input', function () {
    let f = parseFloat(fah.value) || 0;
    let c = (f - 32) * 5 / 9;
    cel.value = c.toFixed(2);
});

// Initialize the conversion when the page loads
convertTemperature();

resetButton.addEventListener('click', function () {
    cel.value = 0;
    fah.value = 32;
});
