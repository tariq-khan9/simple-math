import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Main from "./component/arithmetic/Main";
import Login from "./component/user/Login"; // Import the Login component

import { AuthProvider } from "./utils/AuthContext";
import { SharedProvider } from "./hooks/SharedContext";
import StateDashboard from "./component/user/StateDashboard";

function App() {
  return (
    <Router>
      <SharedProvider>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<StateDashboard />} />
          </Routes>
        </div>
      </SharedProvider>
    </Router>
  );
}

export default App;
