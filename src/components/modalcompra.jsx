import React, { Component, useState } from 'react'
import '../App.css'
import {Button, Modal, Nav} from "react-bootstrap"
import img2 from'../assets/img/entrada.png'
import Web3 from "web3";
import Portis from '@portis/web3';

const web3 = new Web3();

        
function ModalCompra(){
  
        const [show, setShow] = useState(false);

        const connectMetamask = () =>{

        var Web3 = require('web3');
        var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

        let web3_provider;
        let accounts = [];
        
        if (window.ethereum) {
            web3_provider = window.ethereum.enable();
            console.log(window.ethereum);

            web3.eth.getAccounts((error, accounts) => console.log(accounts[0]));

            window.ethereum.request({
                method: 'eth_sendTransaction',
                params: [
                  {
                    from: 0xEDb1364c5845175dD01A39eC6EDDaaa9fE6Ff8D9, // Ip DApp
                    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                  },
                ],
              }).then(r=>console.log(r)).catch(e=>console.log(e))

        } else {
            alert("Descargue MetaMask");
        }
    }
        
         /* ================================  Comienza conexion con portis ================================ */ 
        const connectPortis = () => {

            const portis = new Portis('80927d85-7316-4a40-b81a-b002faeca6cc', 'mainnet');
            const web3 = new Web3(portis.provider);
          
            web3.eth.getAccounts()
            .then(accounts => console.log(accounts))
            .catch(error => console.log(error));
          
            const to = "0xb1690C08E213a35Ed9bAb7B318D114420FB57d8C";
          const amountInEther = 12;
          const gasLimit = "0x0";
          const gasPrice = "0x0";
          
          (async () => {
            const accounts = await portis.provider.enable();
            const response = await web3.currentProvider.send("eth_sendTransaction", [
              {
                from: accounts[0],
                to: to,
                value: etherToHexWei(amountInEther),
                gas: gasLimit,
                gasPrice: gasPrice
              }
            ]);
            console.log(response);
          })();
          
          function etherToHexWei(value) {
            const wei = value * 10 ** 18;
            const hexWei = wei.toString(16);
            return `0x${hexWei}`;
          }
         }
         /* ================================  Termina conexion con portis ================================ */ 

       
        return (
                        
            <div className='boton-comprar'>
              <Button className='boton-comprar btn-secondary' onClick={() => setShow(true)}>
                  <div className='btn-secondary' style={{fontFamily: "'Pacifico', cursive", fontSize: '1.5rem'}}>

                     <a className='Comprar'>Comprar</a>
  
                  </div>
              </Button>
        
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header className='header-modal' closeButton aria-label="Hide">
                  <Modal.Title className='titulo-modal' id="example-custom-modal-styling-title" style={{fontFamily: "'Pacifico', cursive", fontSize: '1.7rem'}}>
                    Compra tus tickets:
                  </Modal.Title>
                  <img className='img-ticket' src={img2} width="80" height="60" alt="..."></img> 
                 
                </Modal.Header>                
                <Modal.Body>
                  

                  <Button className='boton-meta' style={{fontFamily: "'Pacifico', cursive"}} onClick={connectMetamask} >Comprar con Metamask </Button>
                  
                  <Button className='boton-portis' style={{fontFamily: "'Pacifico', cursive"}} onClick={connectPortis} >Comprar con Portis </Button>


                </Modal.Body>
              </Modal>
              
            </div>
        )    
}
export default ModalCompra;