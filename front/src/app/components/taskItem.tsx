import { Box,IconButton,Paper,Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import type { Task, TaskUpdate } from "../types/task";
import { EditTask } from "./editTask";

interface TaskItemProps {
    task: Task;
    onDelete: (id: number) => void;
    onUpDate: (id: number, data: TaskUpdate) => void;
}

export function TaskItem({ task, onDelete, onUpDate }: TaskItemProps) {
    const [openEdit, setOpenEdit] = useState(false);

    return (
        <>
            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    backgroundColor: "gainsboro",
                }}
            >
                <Box display="flex" alignItems="center">

                    <IconButton
                        onClick={() => setOpenEdit(true)}
                        sx={{ mr: 2 }}
                        color="default"
                    >
                        <EditIcon />
                    </IconButton>

                    <Box flex={1} display="flex" gap={4}>
                        <Typography fontWeight="bold" sx={{ minWidth: 120 }}>
                            {task.titulo}
                        </Typography>

                        <Typography color="text.secondary" sx={{ flex: 1 }}>
                            {task.descricao}
                        </Typography>

                        <Typography color="text.secondary" sx={{ minWidth: 80 }}>
                            {task.status}
                        </Typography>
                    </Box>

                    <IconButton
                        onClick={() => onDelete(task.id)}
                        color="default"
                        sx={{ ml: 2 }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Paper>
            
            <EditTask
                open={openEdit}
                task={task}
                onClose={() => setOpenEdit(false)}
                onSave={(data) => {
                    onUpDate(task.id, data);
                    setOpenEdit(false);
                }}
            />
        </>
    );
}
