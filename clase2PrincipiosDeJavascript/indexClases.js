class Cliente {
    constructor(nombre,email){
        this.nombre = nombre;
        this.email = email;
        this.productos = [];
        this.cartera =0;
    }
    saludar = () =>{
        console.log(`Hola, soy ${this.nombre}, tengo ${this.productos.length} productos y ${this.cartera} en dineritossss`)
    }
    añadirFondos = (fondos) =>{
        this.cartera+=fondos;
        // this.cartera = this.cartera + fondos;
    }
    añadirProducto = producto =>{
        this.productos.push(producto);
    }
}

const instanciadeCliente1 = new Cliente("Matías",'correomati@correo.com');
const instanciadeCliente2 = new Cliente("Rodrigo",'correorodri@correo.com');



instanciadeCliente1.añadirFondos(2000);
instanciadeCliente2.añadirProducto("papitas")
instanciadeCliente1.saludar();
instanciadeCliente2.saludar();