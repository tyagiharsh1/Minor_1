import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import OnlyIfNotLoggedIn from "./components/OnlyIfNotLoggedIn";
import RequireUser from "./components/RequireUser";
import toast, { Toaster } from "react-hot-toast";
export const TOAST_SUCCESS = "toast_success";
export const TOAST_FAILURE = "toast_failure";
function App() {
  //for toast
  useEffect(() => {
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_FAILURE:
        toast.error(toastData.message);
        break;
    }
  }, [toastData]);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="App">
        <Routes>
          <Route element={<RequireUser />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<OnlyIfNotLoggedIn />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
