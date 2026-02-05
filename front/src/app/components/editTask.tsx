import { Dialog, DialogTitle,DialogContent,DialogActions,Button,TextField,MenuItem,Typography,} from "@mui/material";
import { useState } from "react";
import type { Task, TaskStatus, TaskUpdate } from "../types/task";

interface Props {
    open: boolean;
    task: Task;
    onClose: () => void;
    onSave: (data: TaskUpdate) => void;
}

export function EditTask({ open, task, onClose, onSave }: Props) {
    const [titulo, setTitulo] = useState(task.titulo);
    const [descricao, setDescricao] = useState(task.descricao);
    const [status, setStatus] = useState<TaskStatus>(task.status);

    const handleSave = () => {
        onSave({
            titulo,
            descricao,
            status,
        });
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            sx={{ borderRadius: 3, backgroundColor: "gainsboro" }}
        >
            <DialogTitle>
                <Typography variant="h6" fontWeight="bold">
                    Editar Task
                </Typography>
            </DialogTitle>

            <DialogContent>
                <TextField
                    label="Título"
                    fullWidth
                    margin="normal"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <TextField
                    label="Descrição"
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />

                <TextField
                    select
                    label="Status"
                    fullWidth
                    margin="normal"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as TaskStatus)}
                >
                    <MenuItem value="pendente">Pendente</MenuItem>
                    <MenuItem value="em andamento">Em andamento</MenuItem>
                    <MenuItem value="concluida">Concluída</MenuItem>
                </TextField>
            </DialogContent>

            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={onClose} sx={{ fontWeight: "bold", color:"black"}}>
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSave}
                    sx={{
                        fontWeight: "bold",
                        backgroundColor: "#424141",
                        "&:hover": { backgroundColor: "black" },
                    }}
                >
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
