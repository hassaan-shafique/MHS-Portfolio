
import './App.css';

import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MoreProjects from './Components/MoreProjects';
import Services from './Components/Services';
import Travel from './Components/Travel';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        
          <Route path="/moreprojects" element={<MoreProjects/>}/>
          <Route path="/service" element={<Services />} />
          <Route path='/mytravel' element={<Travel/>}/>
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
