import './App.css';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { shop } from './Pages/Shop.jsx';
import { ShopCategory } from './Pages/ShopCategory.jsx';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='product' element={<Product/>} >
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
