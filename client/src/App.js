import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Search from "./Pages/Search/search";
import OnlyIfNotLoggedIn from "./components/OnlyIfNotLoggedIn";
import RequireUser from "./components/RequireUser";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<OnlyIfNotLoggedIn />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
