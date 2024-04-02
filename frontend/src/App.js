import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowerRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowerRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory/>}/>
        <Route path='/womens' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>
      </Routes>
      </BrowerRouter>
    </div>
  );
}

export default App;
