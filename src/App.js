import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import DetailProduct from './components/DetailProducts/DetailProduct';
import Products from './components/products/Products';

function App() {
  return (
    <Router>
      <div style={{marginTop:"2rem"}} className="grid wide">
        <Routes>
          <Route path="/" exact element={<Products />}/>
          <Route path="/product/:id" exact element={<DetailProduct />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
