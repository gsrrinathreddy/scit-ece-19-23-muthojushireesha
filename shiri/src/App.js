import './App.css';
import Navbar from './Component/Navbar';
import Aboutus from './Pages/Aboutus';
import Qualification from './Pages/Qualification';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="Aboutus" element={<Aboutus/>}/>
      <Route path="Qualification" element={<Qualification/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>  
      <Route path="Skills" element={<Skills/>}/>
      
     </Routes>
     </BrowserRouter>

    </div>
  );
}
export default App;
