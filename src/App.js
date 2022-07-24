<<<<<<< HEAD
import React from 'react';
import EcommerceFilter from "../src/components/filter/EcommerceFilter"
=======
import React, {useState} from 'react';
import Card from './components/Card/Card';


// import styled from 'styled-components';

>>>>>>> c767470aa77ba085b4734a707441217f38c75c9d
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
<<<<<<< HEAD
     <EcommerceFilter/>
=======

      <Card handleAdicionarItem={handleAddItem} />
      
>>>>>>> c767470aa77ba085b4734a707441217f38c75c9d
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
