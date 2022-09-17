//Importar y exportar datos de otros archivos 

//Hacer rferencia a los archivos que vamos a utilizar

import { calcularIva2,Producto } from "./05-desestructura-funcion";

const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio:1222
    },

    {
        desc:'Tablet2',
        precio:2234
    },

    {
        desc:'Telefono2',
        precio:2222
    },
];
const [total1,iva1]=calcularIva2(tiendaProductos);
console.log(`IMPORTACION DE ARCHIVOS \n Total: ${total1} \n IVA: ${iva1}`);

