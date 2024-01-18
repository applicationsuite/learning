import "./App.css";
import { BrowserRouter, Route, Link, Routes,} from "react-router-dom";
import { Login } from "./login/login";
import { NetflixRegister } from "./netflix/netflix-register";
import { useState } from "react";
function App() {
  const [now] = useState(new Date());
  return (
    <div className="App">
      <p> Page loaded : {now.toLocaleTimeString()}</p>
      <BrowserRouter>
        <nav>
          <Link className="btn btn-danger me-2" to="/">
            Home
          </Link>
          <Link className="btn btn-danger me-2" to="kids">
            Kids
          </Link>
          <Link className="btn btn-danger me-2" to="women">
            Women
          </Link>
          <Link className="btn btn-danger me-2" to="men">
            Men
          </Link>
          <Link className="btn btn-danger me-2" to="login">
            Login
          </Link>
          <Link className="btn btn-danger" to="register">
            Register
          </Link>
        </nav>
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Home</h2>
              </>
            }
          />
          <Route
            path="kids"
            element={
              <>
                <h2>Kids</h2>
                <p>30% OFF on Kids Fashion</p>
              </>
            }
          />
          <Route
            path="men"
            element={
              <>
                <h2>Men's Fashion</h2>
              </>
            }
          />
          <Route
            path="women"
            element={
              <>
                <h2>Women's Fashion</h2>
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<NetflixRegister />} />
          <Route
            path="*"
            element={
              <>
                <code>Page you requested : Not Found</code>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
