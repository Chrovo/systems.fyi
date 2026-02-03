import Box from "./Square"

type SystemProps = {
  name: string
}

const days = Array.from({length: 52}, () => new Array(7).fill(0))

const System = ({name}: SystemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>{name}</div>
      <div className="flex space-x-1">
        {days.map((col, colIndex) => (
          <div className="flex flex-col space-y-1" key={colIndex}>
            {col.map((_, i) => (
              <Box key={i+7*colIndex} color="bg-green-400" /> 
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default System