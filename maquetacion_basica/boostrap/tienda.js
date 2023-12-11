$(document).ready(function(){
    class ProductoCarrito{
        constructor (nombre, precio, imagen){
            this.nom = nombre;
            this.cant = 1;
            this.img = imagen;
            this.precio = precio;
        }
        getNombre(){
            return this.nom;
        }
        getCantidad(){
            return this.cant;
        }
        getImagen(){
            return this.img;
        }
        getPrecio(){
            return this.precio;
        }
        setNombre(nombre){
            this.nom = nombre;
        }
        setCantidad(cantidad){
            this.cant = cantidad;
        }
        setImagen(imagen){
            this.img = imagen;
        }
        setPrecio(precio){
            this.precio = precio;
        }
    }
    var mapaProducts = new Map();

    // Seleccionar elemetos
    $("#btnCarrito").click(function(){
        $("#windowCarrito").toggle();
    })
    $("#botonVaciar").click(function(){
        mapaProducts.clear();
        actualizarCarrito();
    })
    //Funcion al pulsar en añadir al carrito en un producto
    $(".addCarrito").click(function(){
        let padreElement = $(this).parent();
        let abueloElement = padreElement.parent();
        //console.log(padreElement);
        //console.log(abueloElement);
        let nombProduc = padreElement.find(".card-title").text();
        let precioProduc = padreElement.find(".card-price").text().replace("€","");
        let imgProduc = abueloElement.find(".img-product").attr("src");
        console.log(nombProduc);

        //Llamamos a funcion para que nos devuelva una instancia del objeto productoCarrito
        let product = createProduct(nombProduc, precioProduc, imgProduc);
        console.log(product);

        //Añadimos el producto al MAPA revisando que si lo tenemos suma +1 la cantidad
        addProductMap(product);
        console.log(mapaProducts);
        actualizarCarrito();
    })

    //Para cerrar el carrito 
    $("#cerrar").click(function(){
        $("#windowCarrito").hide();
    })
    function createProduct(nom, precio, img){
        let producto = new ProductoCarrito(nom, precio, img);
        return producto;
    }
    function addProductMap(producto){
        console.log(producto);
        if(mapaProducts.has(producto.getNombre())){
            //Sumar uno a la cantidad
            mapaProducts.get(producto.getNombre()).setCantidad(mapaProducts.get(producto.getNombre()).getCantidad()+1);
        }else{
            console.log("dsdsdsds");
            mapaProducts.set(producto.getNombre(),producto);
        }
    }
    function actualizarCarrito(){
        $(".imgProducts").remove();
        $(".textProducts").remove();
        $('#total').remove();
        let totalPrecio = 0;
        for (var [key, value] of mapaProducts) {
            totalPrecio += (value.getCantidad() * value.getPrecio());
            let cardHtml = `
            <div class="col textProducts">
                <span class="col-2 imgProducts"><img class="img-product row-2" src="${value.getImagen()}" width="70px"></span>
                <span>Cantidad: ${value.getCantidad()} ${value.getNombre()}</span>
                <span>Precio: ${value.getPrecio()}</span>
            </div>`
            $("#div-carrito").append(cardHtml);
        }
        let cardHtmlTotalPrice = `
        <span id="total">Total: ${totalPrecio} &euro;</span>`;
        $("#total-carrito").append(cardHtmlTotalPrice);      
    }   
})