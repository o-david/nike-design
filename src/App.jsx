import "./App.css";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/errorpage/NotFound";
import { NavBar } from "./componets";
import { NavContext } from "./contexts/NavContext.jsx";
import { useState } from "react";
function App() {
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);

  return (
    <div className="App">
    <NavContext.Provider value={{ showMobileNavBar, setShowMobileNavBar }}>

      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </NavContext.Provider>
    </div>
  );
}

export default App;



   
