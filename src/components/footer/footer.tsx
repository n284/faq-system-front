import { AppBar, Typography } from "@mui/material";

export function Footer() {
    return (
        <AppBar component="footer" position="fixed" sx={{ top: 'auto', bottom: 0 }}>
            <Typography variant="subtitle1" component="p" textAlign="center" >@copyright 2024 nishizawa</Typography>
        </AppBar>
    );
}