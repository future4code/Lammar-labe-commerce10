import React, {useState} from 'react';
import Card from './components/Card/Card';
import RemoverItens from './components/RemoverItens/RemoverItens'
import Header from './components/Header/Header';


import './App.css';




function App() {

  const [cart, setCart] = useState ([])

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

           
      <div>
      <Card handleAddItemToCart={handleAddItemToCart}/>
      </div>
      
      <div>
      <Header />
      <RemoverItens cart={cart} />
      </div>

      
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
