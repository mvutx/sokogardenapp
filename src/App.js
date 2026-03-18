import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import Makepayment from './components/Makepayment';

function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">
       <h1 className='text-danger'>welcome to Sokogarden</h1>
      </header>
      <nav>
        <Link to="/" className='btn btn-primary'>Home</Link>
        <Link to="/addproducts" className='btn btn-warning btn-sm'>Add products</Link>
        <Link to="/signin" className='btn btn-danger btn-sm'>Signin</Link>
        <Link to="/signup" className='btn btn-info btn-sm'>Signup</Link>
      </nav>
      {/*Below is our different routes together with the rendered components*/}
      <Routes>
        <Route path='/' element={<Getproducts />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/makepayment' element= {< Makepayment/> } />
        <Route path='*' element={<Notfound />} />
        
      </Routes>
    </div>
   </Router>
  );
}

export default App;
