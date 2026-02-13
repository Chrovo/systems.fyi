import { useState } from "react"

type BoxProps = {
    system: string,
    date: Date
}

const Box = ({system, date}: BoxProps) => {
    const [color, setColor] = useState("bg-gray-400");
    return (
        <div className="group relative inline-block">
            <div className={`${localStorage.getItem(system)?.includes(date.toDateString()) ? "bg-green-400" : "bg-gray-400"} w-4 h-4 rounded-xs border border-gray-400`} onClick={() => {
                setColor("bg-green-400");
                const existing = localStorage.getItem(system) || "[]";
                const dates = JSON.parse(existing);
                if (!dates.includes(date.toDateString())) {
                    dates.push(date.toDateString());
                    localStorage.setItem(system, JSON.stringify(dates));
                }
            }} />
            <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded-md p-2 z-1">
                {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
            </div>
        </div>
    )
}

export default Box