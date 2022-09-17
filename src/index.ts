interface Producto{
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
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;

}
const articulos1=[telefono,tablet];
const IVATot=calcularIva(articulos1);
console.log(`IVA: ${IVATot}`);