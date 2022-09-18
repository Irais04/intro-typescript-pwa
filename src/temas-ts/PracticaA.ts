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

        let total: number=0
        let text: string= '';

        for(let index = 0; index< this.cantidad; index++){
            if (index == (this.cantidad - 1)){
                text+= `${this.numeroBase} `;
            }
            else{
                text+= `${this.numeroBase} + `;
            }
            total+= this.numeroBase
        }
        console.log(` ${text}= ${total}`);
    }
}

