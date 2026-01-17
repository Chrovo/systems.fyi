type SystemProps = {
  name: string
}

const System = ({name}: SystemProps) => {
  return (
    <div>{name}</div>
  )
}

export default System