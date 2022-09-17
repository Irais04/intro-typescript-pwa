

//Desestructuracion de objetos y arreglos

interface Detalles{
    autor: string;
    year:number;
}
interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}
const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion: 'Mañanitas',
    detalles:{
        autor: 'cepillin',
        year:1999,
    }
}

const{volumen, segundo, cancion,detalles}= reproductor;

const{autor}=detalles;

console.log(`El volumen actual es : ${volumen}`);
console.log(`El segundo actual es : ${segundo}`);
console.log(`la cancion actual es : ${cancion}`);
console.log(`El autor de la cancion es : ${autor}`);

const dbz:string[]=['Goku','Vegeta','Yamcha','Trunks'];
console.log('Personaje 1:, ', dbz[0]);
console.log('Personaje 1:, ', dbz[1]);
console.log('Personaje 1:, ', dbz[2]);
console.log('Personaje 1:, ', dbz[3]);

const[p1,p2,p3,p4]=dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 1: ', p2);
console.log('Personaje 1: ', p3);
console.log('Personaje 1: ', p4);
