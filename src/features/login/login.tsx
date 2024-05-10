import { Box, Button, FormControl, Link, TextField, Typography } from "@mui/material";
import { useState, FocusEvent } from "react";
import { loginFormType } from "./types/loginFormType";

export function Login() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isFailedLogin, setIsFailedLogin] = useState<boolean>(false);
    const [loginForm, setLoginForm] = useState<loginFormType>({
        userId: "",
        password: ""
    });

    const inputUserIdHandler = (event: FocusEvent<HTMLInputElement>) => {
        const currentLoginForm = {
            ...loginForm,
            userId: event.currentTarget.value
        }
        setLoginForm(currentLoginForm);
        setIsActive(!!currentLoginForm.userId && !!currentLoginForm.password);
    };

    const inputPasswordHandler = (event: FocusEvent<HTMLInputElement>) => {
        const currentLoginForm = {
            ...loginForm,
            password: event.currentTarget.value
        }
        setLoginForm(currentLoginForm);
        setIsActive(!!currentLoginForm.userId && !!currentLoginForm.password);
    };

    return (
        <>
            <Box textAlign="center" sx={{ margin: 10 }}>
                <Typography variant="h1" component="h1">FAQ</Typography>
            </Box>
            <Box textAlign="center" >
                {isFailedLogin && <Typography variant="subtitle1" component="p" sx={{ color: "#F44" }}>userId　または　パスワードが間違っています。</Typography>}
                <FormControl sx={{ backgroundColor: "#EEE", borderRadius: 3, width: 300, height: 200 }} >
                    <TextField label="ユーザーID" variant="filled" type="text" required sx={{ margin: 5, marginBottom: 1 }} onBlur={inputUserIdHandler} />
                    <TextField label="パスワード" variant="filled" type="password" required sx={{ margin: 5, marginTop: 1 }} onBlur={inputPasswordHandler} />
                </FormControl>
            </Box>
            <Box textAlign="center">
                <Button variant="contained" sx={{ margin: 2, width: 200, height: 50 }} disabled={!isActive}>ログイン</Button>
            </Box>
            <Box textAlign="center">
                <Link href="#" sx={{ margin: 2 }} >パスワードを忘れた方はこちら</Link>
                <Link href="#" sx={{ margin: 2 }} >新規登録</Link>
            </Box>
        </>
    );
}