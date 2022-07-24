import React, {useState} from 'react';
import Card from './components/Card/Card';

import Ordenacao from './Ordenacao/Ordenacao';

import Header from './components/Header/Header';






function App() {
  
const [cart, setCart] = useState ([])
const [sortingParameter, setSortingParameter] = useState("nome")

function handleAddItem (url, nome, valor) {
  const itemBrinq = {url, nome, valor}
  setCart(itemBrinq)
  console.log([itemBrinq])
}

  return (
    <div className="App">
      <Header/>
      <Ordenacao
        sortingParameter={sortingParameter}
        setSortingParameter={setSortingParameter}
      />
      <Card handleAdicionarItem={handleAddItem} />
      
    </div>
    
  );
}


export default App;




// import React from 'react';
// import Card from './components/Card/Card';


// // import styled from 'styled-components';

// import './App.css';
// // import { produtos } from './mockDados';

// function App() {
  
// // const [cart, setCart] = useState ([])

//   return (
//     <div className="App">

//       <Card/>
      
//     </div>
    
//   );
// }


// export default App;
