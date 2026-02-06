import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { register } from "../services/auth.service"; // ajuste conforme seu service

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      await register({
        email,
        password,
      });

      alert("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao criar conta");
    }
  };

  return (
    <Box display="flex" minHeight="100vh">
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="black"
        px={4}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Crie seu
        </Typography>

        <Typography variant="h3" fontWeight="bold">
          TO‑DO‑LIST
        </Typography>

        <Typography mt={2} maxWidth={360} textAlign="center">
          Cadastre-se para começar a organizar suas tarefas
          e manter tudo sob controle.
        </Typography>
      </Box>

      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Paper
          elevation={6}
          sx={{
            backgroundColor: "gainsboro",
            p: 4,
            width: 360,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            mb={3}
            fontWeight="bold"
          >
            Criar Conta
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              label="Confirmar Senha"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: "bold",
                backgroundColor: "#424141",
                "&:hover": { backgroundColor: "black" },
              }}
              startIcon={<PersonAddIcon />}
            >
              Registrar
            </Button>

            <Box textAlign="center" mt={2}>
              <Link
                href="/login"
                underline="hover"
                sx={{ fontSize: 14, color: "text.secondary" }}
              >
                Já tenho conta
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Register;
