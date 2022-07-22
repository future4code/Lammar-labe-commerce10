import React, {useState} from 'react';
import Card from './components/Card/Card';


// import styled from 'styled-components';

import './App.css';
// import { produtos } from './mockDados';

function App() {
  
const [cart, setCart] = useState ([])
console.log(cart)

function handleAddItem (url, nome, valor) {
  const itemBrinq = {url, nome, valor}
  setCart(itemBrinq)
  console.log([itemBrinq])
}

  return (
    <div className="App">

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
