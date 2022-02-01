import './App.css';
import Home from './components/Home';
import React from 'react';
import AddUser from './components/AddUser'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UpdateUser from './components/UpdateUser';
const LazyHome=React.lazy(()=>import('./components/Home'))

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
           <Route path='/' 
           element={
              <React.Suspense fallback='Please Wait..! The page is being loaded'>
                 <LazyHome />
               </React.Suspense>
           } />
          
           <Route path='/AddUser' element={<AddUser />} />
           <Route path='/UpdateUser/:userid' element={<UpdateUser />} />
        </Routes>
     </Router> 
      
    </div>
  );
}

export default App;
