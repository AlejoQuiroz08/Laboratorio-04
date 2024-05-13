//Recorrido

const numeros = [1, 2, 3, 4, 5];

for (const numero of numeros) {
    console.log(numero);
}

//Metodos

const frutas = ['manzana', 'banana', 'cereza'];

frutas.push('dátil'); // Agregar un elemento al final
frutas.pop();

//Destructuración

const numeros = [1, 2, 3];
const [primerNumero, segundoNumero] = numeros;

console.log(primerNumero); 
console.log(segundoNumero);

//Rest y spread

const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5]; 

console.log(nuevosNumeros); 

const [primerNumero, ...restoNumeros] = numeros; 

console.log(primerNumero); 
console.log(restoNumeros); 
