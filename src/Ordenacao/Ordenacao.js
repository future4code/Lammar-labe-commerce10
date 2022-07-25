import React, {useState} from 'react';
import styled from 'styled-components';


const OrderContainer = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    
`
const Seleciona = styled.select`
    background: white;
    color: darkblue;
    margin-left: 20px;
    font-size: 18px;
    height: 30px;
`
        

const Ordenacao = (props) => {
        
    return (
        <OrderContainer>
            <label for="sortingParameter">Ordenar por:</label>
            <Seleciona
                name="sortingParameter"
                value={props.sortingParameter}
                onChange={ev=>{props.setSortingParameter(ev.target.value)}}
            >
                <option value={"nome"}>Nome</option>
                <option value={"valor"}>Valor</option>
            </Seleciona>
            {/* <Seleciona
                value={props.order}
                onChange={ev=>{props.setOrder(ev.target.value)}}
            >
                <option value={"asc"}>Crescente</option>
                <option value={"desc"}>Decrescente</option>
            </Seleciona>
             */}
        </OrderContainer>
    )
}

export default Ordenacao;
