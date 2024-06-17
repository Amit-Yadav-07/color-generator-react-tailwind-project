import SingleColor from "./SingleColor";
import { nanoid } from 'nanoid';


let ColorList = ({ colors }) => {

    return (
        <div className="grid lg:grid-cols-6 sm:grid-cols-3 mt-[2rem]">
            {colors.map((color, index) => {
                return <SingleColor key={nanoid()} color={color} index={index} />
            })}
        </div>
    )
}


export default ColorList;