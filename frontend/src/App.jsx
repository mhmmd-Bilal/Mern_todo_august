import HomeScreen from "./screens/HomeScreen"
import {Routes,Route} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<HomeScreen/>}/>

      <Route path="/login" element={<LoginScreen/>}/>

    </Routes>
    </>
  )
}

export default App
