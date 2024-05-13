// Destruccion de objetos

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};

const { nombre, edad } = persona;

console.log(nombre); 
console.log(edad);  

// Congelar un objeto

const objeto = {
    propiedad: 'valor'
};

Object.freeze(objeto);

objeto.propiedad = 'nuevo valor';
console.log(objeto.propiedad);

// Copiar dos objetos

const original = { a: 1, b: 2 };
const copia = { ...original };

console.log(copia);

//Metodos para trabajar con objetos 

const persona = {
    nombre: 'María',
    edad: 25,
    ciudad: 'Barcelona',
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};

persona.saludar();

//Nombres abreviados de propiedades  

const nombre = 'Juan';
const edad = 30;

const persona = {
    nombre,
    edad
};

console.log(persona);

