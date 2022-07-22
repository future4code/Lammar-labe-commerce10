import React from 'react';
import { StyledFilter } from './styled';

export function EcommerceFilter(props) {
    return <StyledFilter> 
       <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={(ev) => props.setMinPrice(ev.target.value)}
      />

       <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={(ev) => props.setMaxPrice(ev.target.value)}
        />

    <input
         type="text"
         placeholder="Nome Produto"
         value={props.nomeProduto}
         onChange={(ev) => props.setNomeProduto(ev.target.value)}
        />

   
    </StyledFilter>
}

export default EcommerceFilter


