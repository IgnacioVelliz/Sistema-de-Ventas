class Productos{

    static ContadorProductos = 0;

    constructor(nombre, precio){

        this.idProducto = ++Productos.ContadorProductos;
        this._nombre = nombre;
        this._precio = precio

    }

    get idProductor(){
        return this.idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }

    toString(){
        return this.idProducto +": "+ this._nombre+" $"+this._precio;
    }

}

class Orden{
    
    static ContadorOrden = 0;

    static get MaxProductos(){
        return 5;
    }

    constructor(){
        this._idOrdden = ++Orden.ContadorOrden;
        this._productos= [];
        this._contadorProductosAgregados = 0; 
    }

    get idOrdden(){
        return this._idOrdden;
    }

    agregarProducto(producto){

        if(this._productos.length < Orden.MaxProductos){
            this._productos[this._productos.length] = producto;
            this._contadorProductosAgregados += 1;
        }
        else{
            console.log("No se pueden agregar mas productos")
        }

    }

    calcularTotal(){
        let total = 0;

        for(let producto of this._productos){
            total += producto.precio;
        }

        return total;
    }

    mostrarOrden(){
        let productoOrden = "";
        for(let producto of this._productos){
            productoOrden += "\n{" + producto.toString() + "} ";
        }

        return "Orden: " + this._idOrdden + ", Total: $" + this.calcularTotal() +", Cantidad de Productos: "+ this._contadorProductosAgregados +", Productos: " + productoOrden; 
    }

}

let prodocuto1 = new Productos("Galletitas", 500);
console.log(prodocuto1.toString())
let prodocuto2 = new Productos("Pan", 600);
console.log(prodocuto2.toString())

let orden1 = new Orden();

orden1.agregarProducto(prodocuto1);
orden1.agregarProducto(prodocuto2);
console.log(orden1.calcularTotal())

console.log(orden1.mostrarOrden());

let producto3 = new Productos("Queso", 1000);
let orden2 = new Orden();

orden2.agregarProducto(producto3);
orden2.agregarProducto(prodocuto1);
orden2.agregarProducto(prodocuto2);

console.log(orden2.mostrarOrden())

let orden3 = new Orden();

orden3.agregarProducto(producto3);
orden3.agregarProducto(prodocuto1);
orden3.agregarProducto(prodocuto2);
orden3.agregarProducto(producto3);
orden3.agregarProducto(prodocuto1);
orden3.agregarProducto(prodocuto2); //Este producto no entra en la orden porque el espacio maximo es de 5 productos

console.log(orden3.mostrarOrden())
