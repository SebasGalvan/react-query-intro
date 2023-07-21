import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Ejemplo from "../components/pages/ejemplo/Ejemplo"
import Home from "../components/pages/home/Home"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/ejemplo",
    element: <Ejemplo />

  }
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App