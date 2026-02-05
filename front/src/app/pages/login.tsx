import { useState } from "react";
import { useNavigate } from "react-router-dom"
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { login } from "../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const responseToken = await login({
        username: email,
        password,
      });

      localStorage.setItem("token", responseToken.access_token);
      alert("Login realizado com sucesso!");
      navigate("/tasks");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  return (
    <Box
      display="flex"
      minHeight="100vh"
    >

      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="black"
        px={4}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom >
          Acesse seu
        </Typography>

        <Typography variant="h3" fontWeight="bold">
          TO-DO-LIST
        </Typography>

        <Typography mt={2} maxWidth={360} textAlign="left">
          Organize suas tarefas, acompanhe seu progresso
          e mantenha tudo sob controle.
        </Typography>
      </Box>

      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={6}  sx={{ backgroundColor: "gainsboro", p: 4, width: 360, borderRadius: 3, }}>
          <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
            Login
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

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, py: 1.5, fontWeight: "bold", backgroundColor: "#424141", "&:hover": { backgroundColor: "black" } }}
              startIcon={<LoginIcon />}
            >
              Entrar
            </Button>

            <Box textAlign="center" mt={2}>
              <Link href="/register" underline="hover" sx={{ fontSize: 14, color: "text.secondary" }} >
                Criar conta
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Login;
