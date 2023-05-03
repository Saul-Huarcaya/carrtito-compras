
import './App.css';
import Products from './page/Products';
import {Routes , Route} from 'react-router-dom';
import Nav from './page/Nav';
import Cart from './page/Cart';
import { ProviderEcommerce } from './Context/ContextEcommerce';

function App() {

  return (
    <>
    <ProviderEcommerce>
        <Nav/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
    </ProviderEcommerce>
    </>
  )
}

export default App
