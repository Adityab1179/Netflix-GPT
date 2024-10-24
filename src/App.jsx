import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./components/browse"
import Login from "./components/Login"
function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])
  return(
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
