import TopBar from "./components/topbar/TopBar";
import "./app.css";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const setLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Router>
      <TopBar isLogin={isLogin} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={isLogin ? <Write /> : <Register />} />
        <Route path="/setting" element={isLogin ? <Setting /> : <Login />} />
        <Route path="/register" element={isLogin ? <Home /> : <Register />} />
        <Route
          path="/login"
          setLogin={setLogin}
          element={isLogin ? <Home /> : <Login />}
        />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
