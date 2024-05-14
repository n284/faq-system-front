import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { categoryType } from "../../types/categoryType";
import { userType } from "../../types/userType";

type props = {
    articleId: string
};

export function FAQDetail({ articleId }: props) {
    const data = {
        title: "タイトル",
        category: {
            categoryId: "1",
            categoryName: "カテゴリー"
        } as categoryType,
        content: "本文",
        registerUser: {
            userId: "ユーザー"
        } as userType,
        registerDate: "2024/05/05",
        updateUser: {
            userId: "ユーザー"
        } as userType,
        updateDate: "2024/05/05"
    };

    return (
        <Box>
            <Box textAlign="center" sx={{ marginTop: 10, marginBottom: 1 }}>
                <Typography variant="h4" component="h4">{data.title}</Typography>
            </Box>
            <Box>
                <Stack direction="column" alignItems="flex-end" sx={{ marginRight: "10%" }}>
                    <Stack direction="row" justifyContent="flex-start" spacing={5}>
                        <Typography variant="h6" component="h6" sx={{ width: 105 }} >カテゴリー</Typography>
                        <Typography variant="h6" component="h6" sx={{ width: 150 }}  >{data.category.categoryName}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" spacing={5} sx={{ maxWidth: 400 }}>
                        <Typography variant="h6" component="h6" sx={{ width: 105 }} >投稿者</Typography>
                        <Typography variant="h6" component="h6" sx={{ width: 150 }}>{data.registerUser.userId}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" spacing={5} sx={{ maxWidth: 400 }}>
                        <Typography variant="h6" component="h6" sx={{ width: 105 }}>投稿日</Typography>
                        <Typography variant="h6" component="h6" sx={{ width: 150 }}>{data.registerDate}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" spacing={5} sx={{ maxWidth: 400 }}>
                        <Typography variant="h6" component="h6" sx={{ width: 105 }}>更新者</Typography>
                        <Typography variant="h6" component="h6" sx={{ width: 150 }}>{data.updateUser.userId}</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" spacing={5} sx={{ maxWidth: 400 }}>
                        <Typography variant="h6" component="h6" sx={{ width: 105 }}>更新日</Typography>
                        <Typography variant="h6" component="h6" sx={{ width: 150 }}>{data.updateDate}</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box sx={{ margin: "0 10%" }}>
                <iframe width="100%" height="400px" style={{ display: "block" }} srcDoc={`
                            <Typography paragraph>
                                テストメッセージ
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                                imperdiet.
                            </Typography>
                            <image width="100px" height="100px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasameshicode.com%2Fwp-content%2Fuploads%2F2023%2F02%2Freact-materialUI.jpg&f=1&nofb=1&ipt=8a19663329c3d5b12369d3f514aa175764299481cd83d571a795302e697ac5bb&ipo=images">
                    `}>
                </iframe>
            </Box>
            <Box sx={{ marginTop: 5 }}>
                <Stack direction="row" justifyContent="center" sx={{ margin: "0 10%" }}>
                    <Button variant="contained" sx={{ marginRight: 10 }}>FAQ一覧に戻る</Button>
                    <Button variant="contained" sx={{ marginRight: 1 }}>更新</Button>
                    <Button variant="contained" sx={{ marginLeft: 1 }}>削除</Button>
                </Stack>
            </Box>
        </Box >
    );
}