import Box from "./Square"

type SystemProps = {
  name: string
}

const day = new Date(2026, 0, 1)
const today = new Date()
const days = new Array();
while (day < today) {
  const week = new Array();
  for (let i = 0; i < 7; i++) {
    if (day > today) break;
    week.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  days.push(week);
}

const System = ({name}: SystemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>{name}</div>
      <div className="flex space-x-1">
        {days.map((col, colIndex) => (
          <div className="flex flex-col space-y-1" key={colIndex}>
            {col.map((d: Date, i: number) => (
              <Box key={i+7*colIndex} date={d}/> 
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default System