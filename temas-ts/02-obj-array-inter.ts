

let nombres: string[]=['Liliana', 'Danilo', 'Jose']

console.log(nombres);

let datos:(boolean|number| string)[]=['Mario', 23, true, 'Hernández']



console.log(datos);

datos.push(200);
datos.push('Maria');
datos.push(false);

console.log(datos);

//otra forma de crear arreglos
let arreglo: Array<number>=[1,2,3,4]

const nombre1:string='datos1';

//CREAR UNA INTERFAS

//Definir valores 

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    /*Agregar el ? antes de los : para que sea una variable opcional y no salga errror 
    aunque no se utilice el dato */
    materias?:string[]
};

const alumno:Alumno= {
    matricula:'19002505',
    nombre:'cárdenas',
    edad:21,
    email:'hotmail.com',
    materias:['Ingles']
};
alumno.nombre='Felipe';
console.log(alumno)

