import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { createTask, deleteTask, getTasks, updateTask } from "../services/task.service";
import type { Task, TaskUpdate } from "../types/task";
import { CreateTask } from "../components/createTask";
import { TaskList } from "../components/listTask";
import { useNavigate } from "react-router-dom";


function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks().then(setTasks).catch(e =>{
      if (e.status == 401) navigate("/login");
    });
  }, []);

  const handleCreate = async (data: {
    titulo: string;
    descricao?: string;
  }) => {
    const newTask = await createTask(data);
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleDelete = async (id: number) => {
    const confirm = window.confirm("Tem certeza que deseja excluir esta task?");

    if (!confirm) return;

    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      alert("Erro ao deletar task");
    }
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
    <Box >
      <CreateTask onCreate={handleCreate} />
      <TaskList tasks={tasks} onDelete={handleDelete} onUpDate={handleUpdate} />
    </Box>
  );
}

export default Tasks;