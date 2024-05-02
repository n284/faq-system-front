import { Button } from "@mui/material";
import { MouseEventHandler, useState } from "react";

type props = {
    mark: string | null,
    onSquareClick: MouseEventHandler<HTMLButtonElement>
}

export default function Square({ mark, onSquareClick }: props) {
    const style = {
        border: "1px solid",
        width: "50px",
        height: "50px"
    }
    return (
        <Button className="square" onClick={onSquareClick} sx={style}>{mark}</Button>
    );
}