import { Navbar, TaskEntry, TaskList } from "./components";
import { useLocalStorage } from './hooks';

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <div className="bg-[#364F60] min-h-screen lg:h-screen w-screen bg-cover bg-center bg-[url('https://w0.peakpx.com/wallpaper/159/815/HD-wallpaper-mira-bg-black-abstract-dark.jpg')]" >
      <Navbar />
      <main className='flex flex-col lg:flex-row lg:h-[86vh] w-screen gap-4 lg:gap-0 overflow-auto'>
        <TaskEntry {...{ tasks, setTasks }} />
        <TaskList {...{ tasks, setTasks }} />
      </main>
    </div>
  )
}

export default App
