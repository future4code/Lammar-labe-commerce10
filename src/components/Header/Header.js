import React from "react" 
import ValorLimpar from "../ValorLimpar/ValorLimpar"
import styled from 'styled-components';

const DivHeader = styled.div`


`

function Header () {
    return (
        <DivHeader>           
            <ValorLimpar />
        </DivHeader>
        
    )
}

export default Header 