interface Alumno3{
    nombre:string;
    edad:number;
    direccion:direcciones2;
    mostrarDireccion:()=>void;
}
interface direcciones2{
    calle:string;
    pais:string;
    estado:string;
}

const AlumnoUTL:Alumno3={
    nombre: 'Mario',
    edad:23,
    direccion:{
        calle: 'Veracruz',
        pais: 'MX',
        estado:'GTO',
    },
    mostrarDireccion(){
        return this.nombre+','+this.edad+','+this.direccion.estado+','+this.direccion.pais+','+this.direccion.calle;

    }
}
const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);


