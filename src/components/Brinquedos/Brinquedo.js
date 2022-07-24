import React from "react";
import styled from "styled-components";



const BotaoAdicionar = styled.button`
    font-size: 20px;
    border: none;
    height: 3 rem;
    display: flex;
    align-itens: center;
    justify-content: center;
    width: 80%;
    background: blue;
    border-radius: .5rem;
        
    color: white;
    margin-top: 10px;
    margin-left: 15px;
    padding: 5 px;
    margin-left: 15px;
    margin-bottom: 15px;

    cursor: pointer;
    
`


const CardBrinq = styled.div`

    background: #5F9EA0;
    display: flex;
    flex-direction: column;
    align-itens: center:
    justify-content: center;
    padding: 3 rem;
    margin-top: 20px;
    width: 15%;
          
`
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    padding: 2px;

`
const Nome = styled.h3`
    font-size: 15 px;
    display: flex;
    align-itens: center;
    justify-content: center;
    font-family: sans-serif;
        
`

const Valor = styled.h3`
    font-size: 15 px;
    display: flex;
    align-itens: center;
    justify-content: center;
    
`

const Brinquedo = ({ url, nome, title, valor, handleAddItemToCart}) => {
   
    return(
        <CardBrinq>
            {/* <CardImg src={Pelucia} alt="Pelucia"/> */}
            <CardImg src={url} alt="Pelucia"/> 
            <h1>{title}</h1>
            <Nome>{nome} </Nome>
            <Valor>{valor}</Valor>
            <BotaoAdicionar onClick={() => handleAddItemToCart(url, nome, title, valor)}>Adicionar</BotaoAdicionar>
           
        </CardBrinq>
  
    )
}

export default Brinquedo;


// import React from "react";
// import styled from "styled-components";
// // import Pelucia from './img/pelucia.jpg';


// const BotaoAdicionar = styled.button`
//     font-size: 20px;
//     border: none;
//     height: 3 rem;
//     display: flex;
//     align-itens: center;
//     justify-content: center;
//     width: 80%;
//     background: blue;
//     border-radius: .5rem;
        
//     color: white;
//     margin-top: 10px;
//     margin-left: 15px;
//     padding: 5 px;
//     margin-left: 15px;
//     margin-bottom: 15px;
    
// `


// const CardBrinq = styled.div`

//     background: #5F9EA0;
//     display: flex;
//     flex-direction: column;
//     align-itens: center:
//     justify-content: center;
//     padding: 3 rem;
//     margin-top: 20px;
//     width: 15%;
          
// `
// const CardImg = styled.img`
//     width: 100%;
//     height: 100%;
//     padding: 2px;

// `
// const Nome = styled.h3`
//     font-size: 15 px;
//     display: flex;
//     align-itens: center;
//     justify-content: center;
//     font-family: sans-serif;
        
// `

// const Valor = styled.h3`
//     font-size: 15 px;
//     display: flex;
//     align-itens: center;
//     justify-content: center;
    
// `

// const Brinquedo = () => {
   
//     return(
//         <CardBrinq>
//             {/* <CardImg src={Pelucia} alt="Pelucia"/> */}
//             <CardImg src="/pelucia.jpg" alt="Pelucia"/>
//             <Nome>Astronauta e ônibus Espacial de Pelúcia</Nome>
//             <Valor>R$ 67,00</Valor>
//             <BotaoAdicionar>Adicionar</BotaoAdicionar>
           
//         </CardBrinq>
  
//     )
// }

// export default Brinquedo;


