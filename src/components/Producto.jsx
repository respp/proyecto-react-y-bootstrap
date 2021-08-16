import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap';


    const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre,precio,id,img}=producto;


    //Agregando al carrito import Modall from './Modal';
    const seleccionarProducto= id=>{
        const producto=productos.filter(producto => producto.id=== id)[0];
        agregarProducto([
            ...carrito,
            producto,
        ]); }

     //Eliminar producto
     const eliminarProducto= id=>{
        const productos=carrito.filter(producto => producto.id !== id)

        agregarProducto(productos)
    } 


    return ( 


        
<div className='container'>


            <Card className='tickets'>
           {
           // <Card.Img variant="top" src={img} />
            }
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    ${precio}
                </Card.Text>

                    {productos 
                    ?
                    (
                        <Button type= "button" className="btn btn-primary btn-xl mt-2" onClick={ ()=> seleccionarProducto(id)} >Seleccionar</Button>
                    )
                    :
                    (
                        <div>
                        <Button type= "button" className="btn btn-primary btn-xl mt-2" onClick={ ()=> eliminarProducto(id)} >Eliminar</Button>
                      {/*  <Modall/>  */}
                        
                        
                        </div>
                    )
                    }

                
            </Card.Body>
            </Card>



            </div>
            
    );
}
 
export default Producto;