import './App.css';
import LoginSignup from './pages/LoginSignup.jsx';
import Product from './pages/Product.jsx';
import { Cart } from './pages/Cart.jsx';
import { Shop } from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='product' element={<Product/>} >
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
