import { Divider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { statusType } from "../types/status";
import Square from "./Square";

type props = {
    status: statusType,
    setStatus: Dispatch<SetStateAction<statusType>>,
    history: statusType[],
    setHistory: Dispatch<SetStateAction<statusType[]>>
}
export default function Board({ status, setStatus, history, setHistory }: props) {

    function clickSquareHandler(i: number, j: number) {
        if (status.board[i][j] == null && !status.isFinished) {
            const nextBoard = JSON.parse(JSON.stringify(status.board));
            nextBoard[i][j] = status.xIsNext ? "X" : "O";
            setStatus({
                ...status,
                board: nextBoard,
                currentMove: status.currentMove + 1,
                xIsNext: (status.currentMove + 1) % 2 == 0
            });
            setHistory(history.slice(0, status.currentMove + 1));
        }

    }

    return (
        <Divider className="board">
            {status.board.map((line, i) => {
                return (
                    <Divider className="board-row">
                        {line.map((square, j) => {
                            return (
                                <Square mark={square} onSquareClick={() => clickSquareHandler(i, j)} />
                            );
                        })}
                    </Divider>
                );
            })}
        </Divider>
    )
}