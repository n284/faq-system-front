import { Box, Button, Stack, Typography } from "@mui/material";
import { FAQ_DELETE_COMPLETE_PID, FAQ_REGISTER_COMPLETE_PID, FAQ_UPDATE_COMPLETE_PID, RESET_PW_COMPLETE_PID, SEND_LINK_COMPLETE_PID } from "../../constants/pageId";

type props = {
    pageID: string
};

export function Complete({ pageID }: props) {
    let content;
    switch (pageID) {
        case FAQ_REGISTER_COMPLETE_PID:
            content = (
                <>
                    <Box sx={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h3" component="h3" textAlign="center">投稿しました</Typography>
                        <Box textAlign="center">
                            <Typography variant="subtitle1" component="p" textAlign="left" sx={{ display: "inline-block", marginTop: 2, width: "60%", maxWidth: 450 }}>
                                入力されたメールアドレスに確認メールを送信しました。<br />メールを確認してください。
                            </Typography>
                        </Box>
                    </Box>
                    <Box textAlign="center">
                        <Button variant="contained">FAQ一覧へ</Button>
                    </Box>
                </>
            );
            break;
        case FAQ_UPDATE_COMPLETE_PID:
            content = (
                <>
                    <Box sx={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h3" component="h3" textAlign="center">更新しました</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Button variant="contained">FAQ一覧へ</Button>
                    </Box>
                </>
            );
            break;
        case FAQ_DELETE_COMPLETE_PID:
            content = (
                <>
                    <Box sx={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h3" component="h3" textAlign="center">削除しました</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Button variant="contained">FAQ一覧へ</Button>
                    </Box>
                </>
            );
            break;
        case RESET_PW_COMPLETE_PID:
            content = (
                <>
                    <Box sx={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h3" component="h3" textAlign="center">パスワードを変更しました</Typography>
                    </Box>
                    <Box textAlign="center">
                        <Button variant="contained">FAQ一覧へ</Button>
                    </Box>
                </>
            );
            break;
        case SEND_LINK_COMPLETE_PID:
            content = (
                <>
                    <Box sx={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h3" component="h3" textAlign="center">メールの送信が完了しました</Typography>
                        <Box textAlign="center" >
                            <Typography variant="subtitle1" component="p" textAlign="left" sx={{ display: "inline-block", marginTop: 2, width: "60%", maxWidth: 600 }}>
                                入力されたメールアドレスにパスワード変更リンクを送信しました。<br />メールを確認してください。
                            </Typography>
                        </Box>
                        <Box textAlign="center" >
                            <Typography variant="caption" component="p" textAlign="left" sx={{ display: "inline-block", marginTop: 2, width: "60%", maxWidth: 600 }}>
                                有効期限は30分間です。<br />リンク先が無効の場合はやり直してください。
                            </Typography>
                        </Box>
                    </Box >
                    <Box textAlign="center">
                        <Button variant="contained">FAQ一覧へ</Button>
                    </Box>
                </>
            );
            break;
        default:
        //エラー画面へ飛ばす設定
    }

    return (<>{content}</>);
}