
// import EcommerceFilter from "../src/components/filter/EcommerceFilter"
import React, {useState} from 'react';
import Card from './components/Card/Card';
import styled from 'styled-components';
// import RemoverItens from './components/RemoverItens/RemoverItens'

import Ordenacao from './Ordenacao/Ordenacao';
import Header1 from './components/Header/Header';


import EcommerceFilter from "../src/components/filter/EcommerceFilter";
import React, {useState} from 'react';
import Card from './components/Card/Card';
import RemoverItens from './components/RemoverItens/RemoverItens';
import Header1 from './components/Header/Header';
import Ordenacao from './Ordenacao/Ordenacao';
// import { produtos } from '../../mockDados/mockDados';
import './App.css';


const DivApp = styled.div`
  display: flex;
  flex-direction: column;

`

function App() {

  const [cart, setCart] = useState ([])

  const [sortingParameter, setSortingParameter] = useState("nome")

  // const [produtos] = useState(produtos)
  const [sortingParameter, setSortingParameter] = useState("nome")
  const [order, setOrder] = useState("asc")
 



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

// function handleAddItem (url, nome, valor) {
//   const itemBrinq = {url, nome, valor}
//   setCart(itemBrinq)
// }

    
        return (

        <div className="App">
            <Header1/>
            <Ordenacao
              sortingParameter={sortingParameter}
              order={order}

    
              setSortingParameter={setSortingParameter}
              setOrder={setOrder}
            
            />
            <Card handleAdicionarItem={handleAddItem} />

            
        
        </div>
        )    
   
}


export default App;















