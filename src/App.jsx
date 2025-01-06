import './App.css'
import {GlobalContext} from "./context"
import { RouterProvider } from 'react-router'
import {router} from "./routers"

function App() { 
  const user = {
    username: "Hirokawa"
  }


  return (
    <div className="App">   
    <GlobalContext.Provider value={user}>
    <RouterProvider router={router} />
    </GlobalContext.Provider>
    </div>
  )
}
export default App

