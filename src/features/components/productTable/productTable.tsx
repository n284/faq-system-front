import { Table, TableBody, TableCell, TableHead } from "@mui/material";
import { productType } from "../../types/productType";
import { ProductCategoryRow } from "../productCategoryRow/productCategoryRow";
import { ProductRow } from "../productRow/productRow";
import { stateType } from "../../types/stateType";

type props = {
    products: Array<productType>,
} & stateType;

export function ProductTable({ products, filterText, inStockOnly }: props) {
    let lastCategory = "";
    let tableRowArray: Array<JSX.Element> = [];

    for (let product of products) {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            continue;
        } else if (inStockOnly && !product.isStocked) {
            continue;
        } else if (product.category !== lastCategory) {
            tableRowArray.push(<ProductCategoryRow category={product.category} />);
            lastCategory = product.category;
        } else {
        }

        tableRowArray.push(<ProductRow product={product} />)
    }

    return (
        <Table>
            <TableHead>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
            </TableHead>
            <TableBody>
                {tableRowArray}
            </TableBody>
        </Table>
    );
}