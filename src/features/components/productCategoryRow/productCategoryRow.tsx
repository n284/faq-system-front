import { TableHead, TableRow } from "@mui/material";

type props = {
    category: string
}
export function ProductCategoryRow({ category }: props) {
    return (
        <TableRow>
            <TableHead>{category}</TableHead>
        </TableRow>
    );
}