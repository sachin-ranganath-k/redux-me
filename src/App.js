import './App.css';
import Home from './components/Home';
import React from 'react';
import AddUser2 from './components/AddUser2'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UpdateUser from './components/UpdateUser';
import Loader from './components/loader/Loader';
import Pagination from './components/Pagination';
import HomeCard from './components/HomeCard';
const LazyHome=React.lazy(()=>import('./components/Home'))

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
           <Route path='/' 
           element={
              <React.Suspense fallback={<Loader />}>
                 <LazyHome />
               </React.Suspense>
           } />
          
           <Route path='/AddUser' element={<AddUser2 />} />
           <Route path='/UpdateUser/:userid' element={<UpdateUser />} />
           <Route path='/Pagination' element={<Pagination />} />
           <Route path='/HomeCard' element={<HomeCard />} />
        </Routes>
     </Router> 
      
    </div>
  );
}

export default App;
