import { useState } from "react"

type BoxProps = {
    date: Date
}

const Box = ({date}: BoxProps) => {
    const [color, setColor] = useState("bg-gray-400");
    return (
        <div className="group relative inline-block">
            <div className={`${color} w-4 h-4 rounded-xs border border-gray-400`} onClick={() => setColor("bg-green-400")} />
            <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded-md p-2 z-366">
                {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
            </div>
        </div>
    )
}

export default Box