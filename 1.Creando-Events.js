//1: Creando Events

//Dado el siguiente HTML:

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

let btnToClick = document.body.querySelector("#btnToClick");
btnToClick.addEventListener("click", function () {
    console.log(event);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

let focusInput = document.body.querySelector(".focus");
focusInput.addEventListener("focus", function (event) {
    console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let valueInput = document.body.querySelector(".value");
valueInput.addEventListener("input", function (event) {
    console.log(event.target.value);
});




