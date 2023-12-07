import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Search from "./Pages/Search/search";
import OnlyIfNotLoggedIn from "./components/OnlyIfNotLoggedIn";
import RequireUser from "./components/RequireUser";
function App() {
<<<<<<< HEAD
  //for toast
  // useEffect(() => {
  //   switch (toastData.type) {
  //     case TOAST_SUCCESS:
  //       toast.success(toastData.message);
  //       break;
  //     case TOAST_FAILURE:
  //       toast.error(toastData.message);
  //       break;
  //   }
  // }, [toastData]);
=======
>>>>>>> 647c6729f7dc977d4db28d8ba02008e48b892d24
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
