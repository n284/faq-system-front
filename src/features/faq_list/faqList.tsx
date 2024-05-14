import { Box, Button, Link, Pagination, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { userType } from "../../types/userType";
import { categoryType } from "../../types/categoryType";
import { pageType } from "./types/pageType";

export function FAQList() {
    function createData(num: number) {
        return Array(num).fill(null).map((_, i) => {
            const id = i;
            const title = `タイトル${i}`;
            const category = {
                categoryId: i % 10,
                categoryName: `カテゴリ${i % 10}`
            } as categoryType;
            const registerUser = {
                userId: `ユーザー${i % 10}`
            } as userType;
            const registerDate = new Date(`2024/05/${i % 32 === 0 ? 1 : i % 32}`);
            return {
                id,
                title,
                category,
                registerUser,
                registerDate
            };
        });
    }

    const datas = createData(201);

    const [page, setPage] = useState<pageType>({
        data: datas.slice(0, 10),
        pageNumber: 1
    });

    const changePage = (event: ChangeEvent<unknown>, pageNumber: number) => {
        setPage({
            data: datas.slice((pageNumber - 1) * 10, pageNumber * 10),
            pageNumber: pageNumber
        });
    };

    return (
        <>
            <Box>
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <Typography variant="h3" component="h3" sx={{ margin: 5 }}>FAQ list</Typography>
                    <Button variant="contained" sx={{ width: 64, height: 64, borderRadius: 50, position: "fixed", bottom: 50, right: 10 }} >投稿</Button>
                </Stack>
                <TableContainer component={Paper} sx={{ width: "60%", margin: "auto", backgroundColor: "#EEE" }}>
                    <Table aria-label="faq list" sx={{ minWidth: 500 }} >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ width: "1em" }} >No</TableCell>
                                <TableCell align="left" sx={{ minWidth: "5em", width: "auto" }}>タイトル</TableCell>
                                <TableCell align="center" sx={{ width: "6em" }}>カテゴリー</TableCell>
                                <TableCell align="center" sx={{ width: "6em" }}>投稿者</TableCell>
                                <TableCell align="center" sx={{ width: "6em" }}>投稿日</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {page.data.map((data, index) => {
                                return (
                                    <TableRow key={data.id}>
                                        <TableCell align="center"><Link href="#">{(page.pageNumber - 1) * 10 + index + 1}</Link></TableCell>
                                        <TableCell align="left">{data.title}</TableCell>
                                        <TableCell align="center">{data.category.categoryName}</TableCell>
                                        <TableCell align="center">{data.registerUser.userId}</TableCell>
                                        <TableCell align="center">{data.registerDate.toLocaleDateString()}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <Pagination count={datas.length % 10 == 0 ? datas.length / 10 : (datas.length - (datas.length % 10)) / 10 + 1} color="primary" onChange={changePage} />
                </TableContainer>
            </Box>
        </>
    );
}