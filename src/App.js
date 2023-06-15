import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import './App.css'

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
          {/* <Route element={<PrivateRoute />}>
        </Route> */}
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
