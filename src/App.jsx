import './App.css'
import Home from "./pages/index"
import {GlobalContext} from "./context"

function App() { 
  const user = {
    username: "Hirokawa"
  }


  return (
    <div className="App">   
    <GlobalContext.Provider value={user}>
      <Home/>  
    </GlobalContext.Provider>
    </div>
  )
}
export default App

