import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import UpdateTodoScreen from "./screens/UpdateTodoScreen";
import RegisterPage from "./screens/RegisterPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/login" element={<LoginScreen />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/edit/:id" element={<UpdateTodoScreen />} />
      </Routes>
    </>
  );
}

export default App;
