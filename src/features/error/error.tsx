import { Box, Button, Typography } from "@mui/material";
import { BAD_REQUEST, FORBIDDEN, INTERNAL_SERVER_ERROR, METHOD_NOT_ALLOWED, NOT_FOUND, TIMEOUT_ERROR } from "../../constants/statusCode";

type props = {
    errorCode: string,
    isLogin: boolean
};

export function Error({ errorCode, isLogin }: props) {
    let component;

    switch (errorCode) {
        case BAD_REQUEST:
            component = (<Typography variant="h3" component="h3">{`不正なリクエストです`}</Typography>);
            break;
        case FORBIDDEN:
            component = (<Typography variant="h3" component="h3">{`権限がありません`}<br />{`権限のあるユーザーで操作をやり直してください`}</Typography>);
            break;
        case NOT_FOUND:
            component = (<Typography variant="h3" component="h3">{`ページが見つかりません`}</Typography>);
            break;
        case METHOD_NOT_ALLOWED:
            component = (<Typography variant="h3" component="h3">{`許可されていないリクエストです。`}</Typography>);
            break;
        case TIMEOUT_ERROR:
            component = (<Typography variant="h3" component="h3">{`タイムアウトしました`}<br />{`操作をやり直してください`}</Typography>);
            break;
        case INTERNAL_SERVER_ERROR:
            component = (<Typography variant="h3" component="h3">{`サーバーエラーが発生しました`}</Typography>);
            break;
        default:
            //エラー内容を記載する
            break;
    }
    return (
        <>
            <Box>
                <Typography variant="h3" component="h3">{`ステータスコード&nbsp;:${errorCode}`}</Typography>
            </Box >
            <Box>
                {component}
            </Box>
            <Box>
                {isLogin && <Button variant="contained">FAQ一覧に戻る</Button>}
                {!isLogin && <Button variant="contained">ログイン画面に戻る</Button>}
            </Box>

        </>
    );
}