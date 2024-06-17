import { useState } from "react";

let Form = ({ addColor }) => {
    let [color, setColor] = useState('')

    let HandleSubmit = (e) => {
        e.preventDefault();
        addColor(color)
    }
    return (
        <div className="shadow mt-[50px] p-4 w-[90%] mx-auto lg:w-[50%] flex lg:flex-row lg:items-center lg:justify-start flex-col">
            <h2 className="text-3xl lg:mx-0 mx-auto">Color Generator</h2>
            <form className="lg:ml-[3rem] mx-auto lg:mt-0 mt-2 flex items-center justify-center flex-wrap" onSubmit={HandleSubmit} >
                <input type="color" className="mr-1" value={color} onChange={(e) => { setColor(e.target.value) }} />
                <input className="p-1 mx-auto w-[auto] border" type="text" value={color} onChange={(e) => { setColor(e.target.value) }} placeholder="#5b63d7" />
                <button className="bg-blue-500 p-1 text-1xl text-white" style={{ backgroundColor: color }}>Submit</button>
            </form>
        </div>
    )
}


export default Form;