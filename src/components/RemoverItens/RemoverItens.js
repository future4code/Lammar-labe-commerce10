import React from 'react';
import styled from 'styled-components';
import CardsRemoverItens from '../CardsRemoverItens/CardsRemoverItens';

const Footer = styled.footer`
width: 300px;
border:solid 1px;
border-radius:20px;
box-sizing: border-box;
`

function RemoverItens ({ cart }) {
    return ( 
        <Footer>
        <div>
            {cart.map((cartItem, index) =>
            <CardsRemoverItens key={index}  name={cartItem.nome} price={cartItem.valor} titulo={cartItem.title}/>)}
   
        </div>
        </Footer>
        
        
    )
}

export default RemoverItens