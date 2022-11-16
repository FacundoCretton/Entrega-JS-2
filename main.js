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

// a)  Las pizzas que tengan un id impar.

const idImpar = pizzas.filter( (pizza) => {
    return pizza.id % 2 ===1;

});

idImpar.forEach((pizza) =>{
    console.log( `La pizza ${pizza.nombre} tiene una id impar `);
});


// b) ¿Hay alguna pizza que valga menos de $600?

const pizzasConMenorPrecioA = (precio) => {
    return pizzas.some ((pizza) => {
        return pizza.precio < precio;
    })
      ? console.log (`hay pizzas que valen menos de $${precio}`)
      : console.log(`no hay pizzas que valgan menos de $${precio}`);
};

pizzasConMenorPrecioA(600)

// c) El nombre de cada pizza con su respectivo precio.

const PizzaPorNombreYPrecio = pizzas.filter ((pizza) => {
    return pizza.nombre && pizza.precio}

);

PizzaPorNombreYPrecio.forEach( (pizza) => {
    console.log( `La pizza de ${pizza.nombre} tiene un precio de $${pizza.precio} `);


})

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).

pizzas.forEach (pizzas => console.log(`La pizza ${pizzas.nombre} tiene como ingredientes: ${pizzas.ingredientes}`));