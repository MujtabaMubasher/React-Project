import Login from "../component/Login"
import Profile from "../component/Profile"
import UserContextProvider from "../context/UserContextProvider"
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <div>React with Chai and share is important</div>
      <Login/>
      
      <Profile/>
    </UserContextProvider>
  )
}

export default App
