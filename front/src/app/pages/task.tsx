import { useEffect, useState } from "react";
import {Box} from "@mui/material";
import { createTask, getTasks } from "../services/task.service";
import type { Task } from "../types/task";
import { CreateTask } from "../components/createTask";


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


  return (
    <Box p={4}>
      <CreateTask onCreate={handleCreate} />
    </Box>
  );
}

export default Tasks;