type SystemProps = {
  name: string
}

const System = ({name}: SystemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>{name}</div>
      <div className="bg-green-400 w-5 h-5 rounded-xs border border-gray-400" />
    </div>
  )
}

export default System