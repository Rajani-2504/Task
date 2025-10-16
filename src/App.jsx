import Taskform from "./Component/Taskform"
import Tasklist from "./Component/Tasklist"
import Progress from "./Component/Progress"
export default function App(){
  return(
    <div>
      <h1>Task Buddy</h1>
      <p>Our friendly Taskmanager</p>
      <Taskform />
      <Tasklist />
      <Progress />
      <button>clear all task</button>
    </div>
  )
}