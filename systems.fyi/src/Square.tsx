type BoxProps = {
    color: string
}

const Box = ({color}: BoxProps) => {
    return (
        <div className={`${color} w-4 h-4 rounded-xs border border-gray-400`} />
    )
}

export default Box