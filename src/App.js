import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import { Header } from './Header';
import {Login} from "./Login";
import {Cart} from "./Cart"
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Header/>} ></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
