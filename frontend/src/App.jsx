import React from "react"
import Routing from "@/routes/Routing"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} />
      <Routing />
    </>
  )
}

export default App
