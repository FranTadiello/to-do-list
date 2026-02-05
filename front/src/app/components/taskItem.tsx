import {
  Box,
  IconButton,
  Paper,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export function TaskItem({ task, onDelete, onEdit }: TaskItemProps) {
  return (
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
        {onEdit && (
          <IconButton
            onClick={() => onEdit(task.id)}
            sx={{ mr: 2 }}
            color="default"
          >
            <EditIcon />
          </IconButton>
        )}

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
  );
}
