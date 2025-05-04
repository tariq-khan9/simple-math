import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Main from "./component/arithmetic/Main";
import Login from "./component/user/Login"; // Import the Login component
import Register from "./component/user/Register";
import VerifyEmail from "./component/user/VerifyEmail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
