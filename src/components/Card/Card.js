import React from 'react';
import styled from 'styled-components';
import Brinquedo from '../Brinquedos/Brinquedo';


const Principal = styled.main`
    width: 100%;
    background: white;
    min-height: 40vh;
    display: flex;
    align-itens: center;
    justify-content: center;

`

const SectionCard = styled.section`
    max-widht: 900px;
    width: 90%;
    display: flex;
    align-itens: center;
    justify-content: space-between;

`


const Card = () => {

    return (
        // <h1>Bom dia</h1>

        <Principal>
            <SectionCard>
                <Brinquedo/>
                <Brinquedo/>
                <Brinquedo/>
                <Brinquedo/>
                <Brinquedo/>
                <Brinquedo/>              
            </SectionCard>
        </Principal>
      
    )     
}

export default Card;