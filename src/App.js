import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css'
import Footer from "./components/Footer/Footer";
import Register from './components/Register/Register'
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
