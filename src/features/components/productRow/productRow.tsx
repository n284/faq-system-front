import { TableCell, TableRow } from "@mui/material";
import { productType } from "../../types/productType";

type props = {
    product: productType
};

export function ProductRow({ product }: props) {
    return (
        <TableRow>
            {product.isStocked ?
                <TableCell sx={{ color: "red" }}>{product.name}</TableCell>
                : <TableCell>{product.name}</TableCell>}
            <TableCell>{product.price}</TableCell>
        </TableRow>
    );
}