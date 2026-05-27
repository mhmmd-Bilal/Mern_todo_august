import HomeScreen from "./screens/HomeScreen"
import {Routes,Route} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import UpdateTodoScreen from "./screens/UpdateTodoScreen"

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<HomeScreen/>}/>

      <Route path="/login" element={<LoginScreen/>}/>

      <Route path="/edit/:id" element={<UpdateTodoScreen/>}/>

    </Routes>
    </>
  )
}

export default App
