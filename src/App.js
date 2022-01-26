import './App.css';
import Home from './components/Home';
import AddUser from './components/AddUser'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/AddUser' element={<AddUser />} />
        </Routes>
     </Router> 
      
    </div>
  );
}

export default App;
