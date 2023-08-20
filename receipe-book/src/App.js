import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Components/Create';
import Home from './Components/Home';
import Read from './Components/Read';
import Update from './Components/Update';
import Favourite from './Components/Favourite';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Create' element={<Create />}></Route>
        <Route path='/Read/:id' element={<Read />}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
        <Route path='/Favourite' element={<Favourite/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}
export default App;
