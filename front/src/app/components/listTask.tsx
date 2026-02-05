import { TaskItem } from "./taskItem";
import type { Task, TaskUpdate } from "../types/task";
import { Typography } from "@mui/material";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onEdit: (id: number, data: TaskUpdate) => void;
}

export function TaskList({ tasks, onDelete, onEdit }: TaskListProps) {
    if (tasks.length === 0) {
        return <p>Nenhuma task cadastrada</p>;
    }

    return (
        <>
            <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textAlign: "left", mb: 1 }}
            >
                Minhas Tasks
            </Typography>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </>
    );
}
