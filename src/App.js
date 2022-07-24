import EcommerceFilter from "../src/components/filter/EcommerceFilter";
import React, {useState} from 'react';
import Card from './components/Card/Card';
import RemoverItens from './components/RemoverItens/RemoverItens';
import Header1 from './components/Header/Header';
import Ordenacao from './Ordenacao/Ordenacao';
// import { produtos } from '../../mockDados/mockDados';
import './App.css';



function App() {

  const [cart, setCart] = useState ([])
  // const [produtos] = useState(produtos)
  const [sortingParameter, setSortingParameter] = useState("nome")
  const [order, setOrder] = useState("asc")
 



  function handleAddItemToCart(url, nome, valor, title){
    const itemObject = {url, nome, valor, title}
    setCart([...cart, itemObject])
  }
  

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














