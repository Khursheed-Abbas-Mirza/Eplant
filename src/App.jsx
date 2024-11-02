
import ProductList from './Components/ProductList';
import './App.css';
import AboutUs from './Components/AboutUs'
import CartItem from './Components/CartItem';
import { Route,Routes,HashRouter } from 'react-router-dom';

const App=()=> {

  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='/' element={<AboutUs/>}/>
      <Route path='/Products' element={<ProductList/>}/>
      <Route path='/cart' element={<CartItem/>}/>
    </Routes>
    </HashRouter>
      </>
  
  );
}

export default App;



