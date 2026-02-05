import {
  Box,
  Button,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { useState } from "react";

interface CreateTaskProps {
  onCreate: (data: { titulo: string; descricao?: string }) => void;
}

export function CreateTask({ onCreate }: CreateTaskProps) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    onCreate({ titulo, descricao });
    setTitulo("");
    setDescricao("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 3,
        backgroundColor: "gainsboro", 
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ textAlign: "left" }}
      >
        Criar Task
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
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
          margin="normal"
          multiline
          minRows={3}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <Box mt={3} display="flex" justifyContent="flex-start">
          <Button
            type="submit"
            variant="contained"
            sx={{
              px: 4,
              py: 1,
              fontWeight: "bold",
              backgroundColor: "#424141",
              "&:hover": { backgroundColor: "black" },
            }}
          >
            Criar
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
