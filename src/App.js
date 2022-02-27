import './App.css';
import Home from './components/Home';
import React from 'react';
import AddUser2 from './components/AddUser2'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UpdateUser from './components/UpdateUser';
import Loader from './components/loader/Loader';
import Pagination from './components/Pagination';
import HomeCard from './components/HomeCard';
import AddCities from './admin/admin-components/AddCities';
import AdminLogin from './admin/admin-components/AdminLogin';
import  SearchAccountHolder  from './components/SearchAccountHolder';

const LazyHome=React.lazy(()=>import('./components/Home'))

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
           <Route exact path='/' 
           element={
              <React.Suspense fallback={<Loader />}>
                 <LazyHome />
               </React.Suspense>
           } />
          
           <Route path='/AddUser' element={<AddUser2 />} />
           <Route path='/AdminHome' element={<AddCities />} />
           <Route path='/AdminLogin' element={<AdminLogin />} />
           <Route path='/UpdateUser/:userid' element={<UpdateUser />} />
           <Route path='/Pagination' element={<Pagination />} />
           <Route path='/HomeCard' element={<HomeCard />} />
           <Route path='/SearchAccountHolder' element={<SearchAccountHolder />} />

        </Routes>
     </Router> 
      
    </div>
  );
}

export default App;
