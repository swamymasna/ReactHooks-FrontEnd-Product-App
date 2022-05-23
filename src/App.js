import logo from './logo.svg';
import './App.css';
import ListProductsComponent from './components/ListProductsComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateProductComponent from './components/CreateProductComponent';
import FooterComponent from './components/FooterComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path='/' element={<ListProductsComponent />}></Route>
            <Route path='/products' element={<ListProductsComponent />} ></Route>
            <Route path='/create-product' element={<CreateProductComponent />} ></Route>
            <Route path='/update-product/:id' element={<CreateProductComponent />} ></Route>
            <Route path='/view-product/:id' element={<ViewProductComponent />} ></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

