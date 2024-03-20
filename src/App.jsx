import Input from './components/Input'
import { useState } from 'react'
import Todo from './components/Todo'
import Completed from './components/Completed'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [taskState, setTaskState] = useState(
    {
      tasks: [],
      selectedId: [],
    }
  )

  //! Adding a task to Object with the reference sended by the on Add function of input
  const handleAddTask = (taskData) => {
    setTaskState(prevState => {
      const newTask = {
        ...taskData,
        id: uuidv4(),
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  const handleSelectTasks = (id) => {
    setTaskState(prevState => {
      return {
        ...prevState,
        selectedId: [...prevState.selectedId,id],
      }
    });

  }

  console.log("id= "+taskState.selectedId)
  console.log("task= "+taskState.tasks)
  console.log(taskState)

  return (
    <div className=' h-screen flex flex-col items-center  bg-[#0B1304]/80 p-5'>
      <header className='w-1/3 flex justify-center bg-violet-500 rounded-md'>
        <Input onAdd={handleAddTask} />
      </header>
      <main className=' flex justify-center gap-4 w-[90%] my-8'>
        <Todo tasks={taskState.tasks} onChange={handleSelectTasks} selectedId={taskState.selectedId}/>
        <Completed tasks={taskState.tasks} selectedId={taskState.selectedId}/>
      </main>
    </div>

  )
}

export default App
