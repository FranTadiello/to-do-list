import { useEffect, useState } from "react";
import { getTasks } from "../services/task.service";
import type {Task} from "../types/task";
import Header from "../components/header";


function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  return (
    <div>
      <Header/>
      <h2>Minhas Tasks</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.titulo} — {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
