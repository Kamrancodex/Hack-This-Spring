import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import './style.css';
import SubmitProject from './components/SubmitProject';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/submit-project' element={<SubmitProject/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
