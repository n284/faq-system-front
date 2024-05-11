import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { articleType } from "../../types/articleType";
import { categoryType } from "../../types/categoryType";

export function FAQRegister() {
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
        content: "",
    } as articleType);

    const selectCategory = (event: SelectChangeEvent) => {
        setArticleForm({
            ...articleForm,
            category: {
                ...articleForm.category,
                categoryId: event.target.value
            }
        });
    };

    return (
        <Box>
            <Box>
                <Typography variant="h3" component="h3">投稿内容</Typography>
            </Box>
            <Box sx={{ width: 500, margin: "auto" }}>
                <Stack direction="column">
                    <TextField type="text" inputProps={{ maxLength: 50 }} label="タイトル" variant="filled" />
                    <FormControl variant="filled">
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
                    <TextField type="text" label="本文" variant="filled" multiline rows={25} />
                </Stack>
            </Box>
        </Box>
    );
}