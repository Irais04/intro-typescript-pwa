/*pedir dos nuemeros y se suman por el 2 numero, calcular el numero de base que se repita 
a*b
clase 
privadas
privado y publico 

archivo a clase 
archivo b Importar */

export class Multi{
    private numeroBase:number;
    private numero2:number;
    private total:number;

    setNumeroBase(num:number){
        this.numeroBase= num;
    }
    setNumero2(num2:number){
        this.numero2= num2;
    }
   
    private suma():number{

       let total =0
        for(let i=1; i<=this.numero2; i++){
            total+=this.numeroBase
        }
        return total
    }
    Resultado():void{
        console.log(this.suma());
    }
}


