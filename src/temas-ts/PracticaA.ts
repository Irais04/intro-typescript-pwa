/*pedir dos nuemeros y se suman por el 2 numero, calcular el numero de base que se repita 
a*b
clase 
privadas
privado y publico 

archivo a clase 
archivo b Importar */

export class Multiplicar{
    private numeroBase: number;
    private cantidad: number;

    setNumero1(a:number){
        this.numeroBase = a;
    }

    getNumero1():number{
        return this.numeroBase;
    }

    setCantidad(b:number){
        this.cantidad= b;
    }
    getCantidad():number{
        return this.cantidad;
    }

    calcular():void{

        let total: number=0;
        let repetir: string= '';

        for(let i = 0; i< this.cantidad; i++){
            if (i == (this.cantidad)){
                repetir+= `${this.numeroBase} `;
            }
            else{
                repetir+= ` ${this.numeroBase} +`;
            }
            total+= this.numeroBase
        }
        console.log(` ${repetir}= ${total}`);
    }
}

