import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Header() {
    const { logout } = useAuth();

    return (
        <> <AppBar position="static"
            sx={{ backgroundColor: "gainsboro", color: "black", boxShadow: 2, px: 2, }}
        >
            <Toolbar>
                <Typography variant="h6" fontWeight="bold" sx={{ flexGrow: 1 }}
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
            <Outlet />
        </>
    );
}

export default Header;
