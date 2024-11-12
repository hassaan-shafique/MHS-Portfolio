// Import global styles
import "./App.css";

// Import necessary components
import Home from "./components/Home";
import MoreProjects from "./components/MoreProjects";
import Services from "./components/Services";

// Import React Router components
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes with accurate paths */}
        <Route path="/" element={<Home />} />
        <Route path="/moreprojects" element={<MoreProjects />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
