import React, { Component, useState } from 'react'
import Menu from './components/menu'
import Slider from './components/slider'
import LaBanda from './components/labanda'
import Tour from './components/tour'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
import ModalCompra from './components/modalcompra'
import Footer from './components/footer'
import Slogan from './components/slogan'
import './App.css'


function App() {

    //Creando un listado de productos

    const [productos, guardarProductos] = useState([
        { id: 1, nombre: '20/07 | Gran Rex', precio: 1.549},
        { id: 2, nombre: '22/07 | Hipodromo de Palermo', precio: 2.1729},
        { id: 3, nombre: '29/07 | Estadio Presidente Perón', precio: 1.7499},
        { id: 4, nombre: '03/08 | Little Johns Bar', precio: 1.799},
        { id: 5, nombre: '07/08 | El Piave de Avellaneda', precio: 1.899},
        { id: 6, nombre: '15/08 | Luna Park', precio: 1.1499}
    ]);

    
    // State para un carrito de compras

    const [carrito, agregarProducto] = useState([

        ])


    return (

        <div className = "App" id = "home" >

            { /*============================================  Menú ============================================*/ }
            
            <Menu/>

            { /*============================================  Slider ============================================*/ }

            <Slider/>

            { /*============================================  La Banda ============================================*/ }

            <LaBanda/>

            { /*============================================  Slogan ============================================*/ }

            <Slogan/>

            { /*============================================  Tour ============================================*/ }

            <Tour/>

            { /*============================================  Producto ============================================*/ }

            <h2 className="section-heading text-uppercase mt-4 text-center" >Elegí tus entradas</h2>
            {
                        productos.map(producto => ( 
                            <Producto 
                            key = { producto.id }
                            producto = { producto }
                            productos = { productos }
                            carrito = { carrito }
                            agregarProducto = { agregarProducto }
                            />
                        ))
                        } 

            { /*============================================  Carrito ============================================*/ }
                        
                        <Carrito                         
                        carrito = { carrito } 
                        agregarProducto = { agregarProducto }
                        />

            { /*============================================  Modal ============================================*/ }

            <ModalCompra/>

            { /*============================================  Footer ============================================*/ }

            <Footer/>

        </div>

    );
}

export default App;