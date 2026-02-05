import { useEffect, useState } from "react";
import {Box} from "@mui/material";
import { createTask, getTasks, updateTask } from "../services/task.service";
import type { Task, TaskUpdate } from "../types/task";
import { CreateTask } from "../components/createTask";
import { TaskList } from "../components/listTask";


function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleCreate = async (data: {
    titulo: string;
    descricao?: string;
  }) => {
    const newTask = await createTask(data);
    setTasks((prev) => [newTask, ...prev]);
  };

   const handleDelete = (id: number) => {

  };
   const handleUpdate = async (
  id: number,
  data: TaskUpdate
) => {
  const updated = await updateTask(id, data);

  setTasks((prev) =>
    prev.map((t) => (t.id === id ? updated : t))
  );
};

  return (
    <Box p={4}>
      <CreateTask onCreate={handleCreate} />
       <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleUpdate}/>
    </Box>
  );
}

export default Tasks;