import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import { Header } from './Header';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    </div>
    </Router>
  );
}

export default App;
