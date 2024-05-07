import { Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { stateType } from "../../types/stateType";
import { Dispatch, SetStateAction } from "react";

type props = {
    onChangeHandler: Dispatch<SetStateAction<stateType>>
} & stateType;

export function SearchBar({ filterText, inStockOnly, onChangeHandler }: props) {
    return (
        <form action="" method="POST">
            <TextField placeholder="Search..." value={filterText} onChange={(event) => {
                onChangeHandler({
                    filterText: event.target.value,
                    inStockOnly: inStockOnly
                });
            }} />
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={inStockOnly} onChange={(event) => {
                    onChangeHandler({
                        filterText: filterText,
                        inStockOnly: !inStockOnly
                    });
                }} />} label="Only show products in stock" />
            </FormGroup>
        </form>
    );
}