import { Divider } from "@mui/material";
import { productType } from "../../types/productType"
import { SearchBar } from "../searchBar/searchBar";
import { ProductTable } from "../productTable/productTable";
import { useState } from "react";
import { stateType } from "../../types/stateType";

type props = {
    products: Array<productType>
};

export function FilterableProcutTable({ products }: props) {

    const [state, setState] = useState<stateType>({
        filterText: "",
        inStockOnly: false
    });

    return (
        <Divider>
            <SearchBar filterText={state.filterText} inStockOnly={state.inStockOnly} onChangeHandler={setState} />
            <ProductTable products={products} filterText={state.filterText} inStockOnly={state.inStockOnly} />
        </Divider>
    );
}