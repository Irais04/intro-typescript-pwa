//CLASES

class Persona{ //Public, private
    private nombre:string;
    private edad:number;

    //Establecer que vamos a utilizar un constructor para poder iniciar

    constructor(a:string, b:number){
        this.nombre=a;

        this.edad=b;
    }
    setNombre(a:string){
        this.nombre= a;
    }
    setEdad(b:number){
        this.edad= b;
    }

    private imprimirPersona(){
        console.log(`Nombre: ${this.nombre} \n Edad: ${this.edad}`);
        
    }
    metodoAlterno(){
        this.imprimirPersona();
    }
}

let persona1:Persona;
persona1=new Persona('Irais',20);
let persona2= new Persona('Mario', 19);
persona1.setNombre('Liliana');
persona1.setEdad(21);
persona1.metodoAlterno();
persona2.metodoAlterno();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}
let dado1= new Dado();
dado1.tirar();
dado1.imprimir();