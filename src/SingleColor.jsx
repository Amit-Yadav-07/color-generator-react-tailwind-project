import { toast } from "react-toastify";

let SingleColor = ({ color, index }) => {

    let { hex, weight } = color;

    let CopyClipboardText = async () => {

        if (navigator.clipboard) {

            try {

                await navigator.clipboard.writeText(`#${hex}`)
                toast.success('Color Copied successfully')

            } catch (error) {
                toast.error('failed to copy color to the clipboard')
            }

        } else {
            toast.error('Clipboard Not available ')
        }
    }


    return (
        <div className={index > 10 ? 'text-white' : 'text-black'} style={{ background: `#${hex}`, height: '20vh', cursor: "pointer" }} onClick={CopyClipboardText}>
            <p className="pl-3 pt-3 text-[1.3rem]">{weight}%</p>
            <p className="pl-3 text-[1.3rem]">#{hex}</p>

        </div>
    )
}


export default SingleColor;