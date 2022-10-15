import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Venues from "./components/Venues";
import Venue from "./components/Venue";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <nav className="navbar bg-success">
        <div className="m-2 float-center">
          <h3 className="text-white ms-5">React</h3>
        </div>
        <div className="p-3 float-end">
        
        <Link to="/" className="text-white btn">
          Home
        </Link>

        <Link to="/venues" className="text-white btn">
          Venues
        </Link>
        </div>
      </nav>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/api/venue/:id" element={<Venue />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
