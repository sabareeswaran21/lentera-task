import logo from './logo.svg';
import './App.css';
import Firstpage from './components/firstpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Adddetails from './components/adddetails';
import Viewdetails from './components/viewdetails';
import Updatedetails from './components/updatedetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Firstpage/>}/>
      <Route path='/add' element = {<Adddetails/>}/>
      <Route path='/update/:id' element = {<Updatedetails/>}/>
      <Route path='/view' element = {<Viewdetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
