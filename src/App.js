import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './routes/Home/Home';
import Products from './routes/Products/Products';
import ProductById from './routes/ProductById/ProductById';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/carrito' element={<Cart />} />
          <Route path='/producto/:id' element={<ProductById />} />
          <Route path='/productos/:category' element={<Products />} />
          <Route path='/productos' element={<Products />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' replace />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;