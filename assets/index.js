const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Itera sobre cada botón y asigna un evento de clic a cada uno.
buttons.forEach((item) => {
    item.onclick = () => {
        // Verifica qué botón se ha hecho clic según su ID.
        if (item.id == "clear") {
            // Si el botón es 'clear', borra el contenido del display.
            display.innerText = "";
        } else if (item.id == "backspace") {
            // Si el botón es 'backspace', elimina el último carácter del contenido del display.
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            // Si el botón es 'equal' y hay contenido en el display, evalúa la expresión y muestra el resultado.
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            // Si el botón es 'equal' pero no hay contenido en el display, muestra "Null" temporalmente.
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            // Para otros botones, agrega el contenido del botón al display.
            display.innerText += item.id;
        }
    };
});

// Selecciona elementos adicionales del DOM relacionados con el cambio de tema.
const themeTogglebtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

// Asigna un evento de clic al botón de cambio de tema.
themeTogglebtn.onclick = () => {
    // Alterna la clase 'dark' en el contenedor de la calculadora para cambiar el tema.
    themeTogglebtn.classList.toggle("active");
    calculator.classList.toggle("dark");
    
};