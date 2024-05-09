import { AppBar, Typography } from "@mui/material";

export function Footer() {
    return (
        <AppBar component="footer" position="static">
            <Typography variant="h6" component="div" textAlign="center" sx={{ flexGrow: 1 }}>@copyright 2024 nishizawa</Typography>
        </AppBar>
    );
}