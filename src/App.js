import React from 'react';
import Header from "./Header"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { HashRouter as Router,Routes,Route,Link  } from 'react-router-dom';
function App() {
  return (<>
  <Header/>
  <h1>App</h1>
   
  <Router><Link to='/'>Home</Link>|<Link to='/about'>About</Link>|<Link to='/contact'>Contact</Link>|
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<h1>No Data</h1>}/>
    </Routes>
  </Router>
    </>  );
}
export default App;