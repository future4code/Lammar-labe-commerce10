// import EcommerceFilter from "../src/components/filter/EcommerceFilter"
import React, {useState} from 'react';
import Card from './components/Card/Card';
import styled from 'styled-components';
// import RemoverItens from './components/RemoverItens/RemoverItens'

import Ordenacao from './Ordenacao/Ordenacao';
import Header1 from './components/Header/Header';


const DivApp = styled.div`
  display: flex;
  flex-direction: column;

`


function App() {

  const [cart, setCart] = useState ([])
  const [sortingParameter, setSortingParameter] = useState("nome")



  // function handleAddItemToCart(url, nome, valor, title){
  //   const itemObject = {url, nome, valor, title}
  //   setCart([...cart, itemObject])
  // }
  

function handleAddItem (url, nome, valor) {
  const itemBrinq = {url, nome, valor}
  setCart(itemBrinq)
}

  return (
    <DivApp>
      <Header1/>
      <Ordenacao
        sortingParameter={sortingParameter}
        setSortingParameter={setSortingParameter}
      />
      <Card handleAdicionarItem={handleAddItem} />
      
    </DivApp>
    
  );
}


export default App;




