import { useState } from "react"

type BoxProps = {
    date: Date
}

const Box = ({date}: BoxProps) => {
    const [color, setColor] = useState("bg-gray-400");
    return (
        <div className={`${color} w-4 h-4 rounded-xs border border-gray-400`} onClick={() => setColor("bg-green-400")} />
    )
}

export default Box