//Colocar export a las variables que se utilizaran en otro archivo

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Nokia',
    precio:2345
}
const tablet:Producto={
    desc:'Pad Air',
    precio: 1233,
}
function calcularIva(productos:Producto[]):number{
    let total=0;
    //forEach= Es para hacer un recorrdio por las variables y tomar sus valores 
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;

}
const articulos1=[telefono,tablet];
const IVATot=calcularIva(articulos1);
console.log(`IVA: ${IVATot}`);

export function calcularIva2(productos:Producto[]):[number,number]{
    //Let= Para declarar variable como el var 
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total,total*0.16];
}

const articulos2=[telefono,tablet];
const[total,iva]=calcularIva2(articulos2);
console.log(`Total: ${total} \n IVA: ${iva}`);

