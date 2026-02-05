import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../hooks/useAuth";

function Header() {
    const { logout } = useAuth();

    return (
        <> <AppBar position="static"
            sx={{ backgroundColor: "white", color: "black",  px: 2, py: 2, boxShadow: 'none'}}
        >
            <Toolbar>
                <Typography variant="h5" fontWeight="bold" sx={{ flexGrow: 1 }}
                >
                    TO‑DO‑LIST
                </Typography>
                <Button variant="text" color="inherit" startIcon={<LogoutIcon />} onClick={logout}
                    sx={{ fontWeight: "bold", textTransform: "none", }}
                >
                    Sair
                </Button>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Header;
