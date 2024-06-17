import { useState } from "react";
import ColorList from "./ColorList"
import From from "./Form"
import values from 'values.js';
import { ToastContainer, toast } from 'react-toastify'

function App() {

  let [colors, setColors] = useState(new values('#f15025').all(10));

  let addColor = (color) => {

    try {
      const newColor = new values(color).all(10)
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }

  }

  return (
    <>
      <From addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
