import { Box, Button, Typography } from "@mui/material";

export function Logout() {
    return (
        <>
            <Box textAlign="center" sx={{ margin: 50, marginBottom: 5 }}>
                <Typography variant="h6" component="h6">ログアウトしました。</Typography>
            </Box>
            <Box textAlign="center">
                <Button variant="contained" sx={{ width: 200 }}>ログイン画面へ</Button>
            </Box>
        </>
    );
}