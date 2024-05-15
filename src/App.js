
import './App.css';

import Home from './Components/Home';
import {BrowserRouter,Switch,Routes,Route} from 'react-router-dom'
import MoreProjects from './Components/MoreProjects';
import Services from './Components/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
        
          <Route path="/moreprojects" element={<MoreProjects />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
