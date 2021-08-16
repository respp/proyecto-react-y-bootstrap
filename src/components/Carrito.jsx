import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Producto from './Producto';
import img1 from'../assets/img/carrito.png'

const Carrito = ({carrito, agregarProducto}) => ( 
            <div className='carrito'>
                <h4 className="text-center mt-5">Tus tickets seleccionados en el carrito:</h4><img src={img1} className="mt-2 mb-3" width="40" height="40" alt=""></img>
                

                <div className='d-flex justify-content-around'>
                    {carrito.lenght === 0        
                    ?<div>No hay elementos en el carrito</div>
            

                        :carrito.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                                carrito={carrito}
                                agregarProducto={agregarProducto}/>
                        )) }
                
                </div>
                </div>
            

      
 );

 export default Carrito;