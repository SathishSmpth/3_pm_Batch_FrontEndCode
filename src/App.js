import Navbar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import Post from "./components/Post.js";
import LoginPage from "./components/LoginPage.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/post" element={<Post />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>   
    </div>
  );
}

export default App;
