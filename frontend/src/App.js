import './App.css';
import { LoginSignup } from './Pages/LoginSignup.jsx';
import { Product } from './Pages/Product.jsx';
import { Cart } from './Pages/Cart.jsx';
import { Shop } from './Pages/Shop.jsx';
import { ShopCategory } from './Pages/ShopCategory.jsx';
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
        <Route path='/mens' element={<ShopCategory category="mens"/>}/>
        <Route path='/womens' element={<ShopCategory category="womens"/>}/>
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
