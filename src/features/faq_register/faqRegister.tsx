import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { useState, FocusEvent } from "react";
import { articleType } from "../../types/articleType";
import { categoryType } from "../../types/categoryType";

type props = {
    isConfirm: boolean
};

export function FAQRegister({ isConfirm }: props) {
    const categories = Array(10).fill(null).map((_, i) => {
        return {
            categoryId: i + 1,
            categoryName: `カテゴリー${i + 1}`
        }
    });

    const [articleForm, setArticleForm] = useState<articleType>({
        title: "",
        category: {
            categoryId: "",
            categoryName: ""
        } as categoryType,
        content: ""
    } as articleType);

    const [isActive, setIsActive] = useState<boolean>(false);

    const selectCategory = (event: SelectChangeEvent) => {
        const form = {
            ...articleForm,
            category: {
                ...articleForm.category,
                categoryId: event.target.value
            }
        };
        setArticleForm(form);
        setIsActive(!!form.title && !!form.category.categoryId && !!form.content);
    };

    const changeTitle = (event: FocusEvent<HTMLInputElement>) => {
        const form = {
            ...articleForm,
            title: event.currentTarget.value
        };
        setArticleForm(form);
        setIsActive(!!form.title && !!form.category.categoryId && !!form.content);
    };

    const changeContent = (event: FocusEvent<HTMLInputElement>) => {
        const form = {
            ...articleForm,
            content: event.currentTarget.value
        };
        setArticleForm(form);
        setIsActive(!!form.title && !!form.category.categoryId && !!form.content);
    };

    return (
        <Box>
            <Box sx={{ margin: "auto" }}>
                {!isConfirm && <Typography variant="h3" component="h3" textAlign="center" sx={{ margin: 5 }}>投稿内容</Typography>}
                {isConfirm && <Typography variant="h3" component="h3" textAlign="center" sx={{ margin: 5 }}>投稿内容確認</Typography>}
            </Box>
            <Box sx={{ width: "70%", maxWidth: 1000, margin: "auto" }}>
                <Stack direction="column" spacing={5} justifyContent="center">
                    <TextField type="text" inputProps={{ maxLength: 50 }} label="タイトル" variant="filled" disabled={isConfirm} onBlur={changeTitle} />
                    <FormControl variant="filled" sx={{ width: 200 }} disabled={isConfirm}>
                        <InputLabel id="category-selector">カテゴリー</InputLabel>
                        <Select labelId="category-selector" value={articleForm.category.categoryId} onChange={selectCategory}>
                            <MenuItem value="">&nbsp;</MenuItem>
                            {categories.map((category) => {
                                return (
                                    <MenuItem value={category.categoryId}>{category.categoryName}</MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <TextField type="text" label="本文" variant="filled" multiline rows={25} disabled={isConfirm} onBlur={changeContent} />
                </Stack>
            </Box>
            <Box sx={{ margin: "auto" }}>
                <Stack direction="row" spacing={5} sx={{ margin: 7 }} justifyContent="center">
                    {!isConfirm && <Button variant="contained" sx={{ width: 200 }}>FAQ一覧に戻る</Button>}
                    {isConfirm && <Button variant="contained" sx={{ width: 200 }}>入力に戻る</Button>}
                    {!isConfirm && <Button variant="contained" sx={{ width: 200 }} disabled={!isActive}>次へ</Button>}
                    {isConfirm && <Button variant="contained" sx={{ width: 200 }}>投稿</Button>}
                </Stack>
            </Box>
        </Box>
    );
}