import React from "react";
import styled from "styled-components";


const HeaderView = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    font-weight: normal;

`

const HeaderAbertura = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
        height: 100%;
    padding: 10px;
    font-weight: normal;

`


const BotaoHeader = styled.button`
font-size: 20px;
border: none;
display: flex;
align-items: center;
justify-content: center;
padding-top: 10px;
width: 10%;
background: blue;
border-radius: .5rem;
color: white;
font-weight: bold;
margin-top: 20px;
margin-left: 15px;
margin-bottom: 15px;
`

const Header = () => {

    return(
    <HeaderView>
        <HeaderAbertura>

            <img></img>
            <h2>As melhores compras aqui!</h2>
            <BotaoHeader>Log in</BotaoHeader>
        </HeaderAbertura>
        <div>
            <h1>Filtros</h1>
        </div>
        
    </HeaderView>

    )
}

export default Header;
