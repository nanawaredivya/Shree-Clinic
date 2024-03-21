import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Signin from './components/pages/Signin';
import Services from './components/pages/Services';
import Home from './components/pages/Home';
import Aboutus from './components/pages/AboutUs';
import { Doctors } from './components/pages/Doctors';
import Register from './components/pages/Register';
import Homopathy from './components/pages/Homopathy';
import Allopathic from './components/pages/Allopathic';


function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout />}  >  
       <Route index element={<Home />} />
       <Route path='/home' element={<Home />}  />
       <Route path='/register' element={<Register />}  />
        <Route path='/signin' element={<Signin />}  />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/homopathy' element={<Homopathy />} />
        <Route path='/allopathic' element={<Allopathic/>}/>
        {/* <Route path='*' element={<Error />}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
