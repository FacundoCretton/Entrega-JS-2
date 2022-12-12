const pizzas =[
    {
        categoria: "pizzas",
        nombre: "roquefort",
        precio: 1100,
        ingredientes:["salsa", "muzzarella", "roquefort"],
        id: 1,

    },
    {
        categoria: "pizzas",
        nombre: "Muzzarella",
        precio: 750,
        ingredientes:["salsa", "muzzarella"],
        id: 2,

    },
    {
        categoria: "pizzas",
        nombre: "Cuatro Quesos",
        precio: 1300,
        ingredientes:["salsa", "muzzarella", "queso azul", "parmesano", "fontina"],
        id: 3,

    },
    {
        categoria: "pizzas",
        nombre: "Fugazzeta",
        precio: 850,
        ingredientes:[ "salsa", "muzzarella", "cebolla"],
        id: 4,
    },

    {
        categoria: "pizzas",
        nombre: "Napolitana",
        precio: 975,
        ingredientes:["salsa", "muzzarella", "tomates"],
        id: 5,
    },
    {
        categoria: "pizzas",
        nombre: "Jamon",
        precio: 1250,
        ingredientes:[ "salsa", "muzzarella", "jamon", "parmesano" ],
        id: 6,
    },
    {
        categoria: "pizzas",
        nombre: "Hawaiana",
        precio: 1400,
        ingredientes:["salsa", "muzzarella", "tomate", "anana", "jamon"],
        id: 7,
    }

]

const formField = document.getElementById("input");
const pizzaInput = document.getElementById("numero");
const formInput = document.getElementById("form");



formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const pizzaID = pizzaInput.value;
    const pizza = pizzas.find(pizza => pizza.id == pizzaID);

    if (pizzaID === "") {
        
        showError(pizzaID, `Debe ingresar un numero`);  
    }
    else if (pizza) {
        
       showSuccess(pizzaID,
         `La pizza "${pizza.nombre}" tiene un precio de:`,
          `$${pizza.precio}`);
        
    } else {
        showError(pizzaID, `Ingrese un numero entre el 1 y el 7`);
       
    }

        
    
});
const showError = (input, message) => {
	formField.classList.remove("success");
	formField.classList.add("error");
	const error = formField.querySelector("small");
	error.textContent = message;
};

const showSuccess = (input, message1, message2) => {
	formField.classList.remove("error");
	formField.classList.add("success");
	const render1 = document.querySelector(".form__render h2");
	render1.textContent = message1;
    const render2 = document.querySelector(".form__render h3");
	render2.textContent = message2;
}




