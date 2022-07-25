import React from 'react';
import styled from 'styled-components';
import Brinquedo from '../Brinquedos/Brinquedo';
import { produtos } from '../../mockDados/mockDados';


const Principal = styled.main`
    width: 100%;
    background: white;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;

`

const SectionCard = styled.section`
    max-width: 900px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

   
`


const Card = ({handleAddItem}) => {

    return (
        
        <Principal>
            <SectionCard>
                {produtos.map((produto,index) => (
                    <Brinquedo 
                        url={produto.url} 
                        nome={produto.nome} 
                        // title={produto.title}
                        valor={produto.valor}
                        handleAddItem={handleAddItem}
                    />
                ))}
                          
            </SectionCard>
        </Principal>
      
    )     
}

export default Card;




