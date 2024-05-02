import { useEffect, useState } from "react";
import Board from "./components/Board";
import { statusType } from "./types/status";
import { Button, Divider, List, ListItem } from "@mui/material";


export default function TicTacToe() {

    function calculateWinner(board: Array<Array<string | null>>) {
        const winLineArray = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
        ];

        for (let winLine of winLineArray) {
            if (board[winLine[0][0]][winLine[0][1]] &&
                board[winLine[0][0]][winLine[0][1]] === board[winLine[1][0]][winLine[1][1]] &&
                board[winLine[0][0]][winLine[0][1]] === board[winLine[2][0]][winLine[2][1]]
            ) {
                return `Winner Player : ${board[winLine[0][0]][winLine[0][1]]}`;
            }
        }

        for (let line of board) {
            for (let square of line) {
                if (square) {
                    continue;
                } else {
                    return null;
                }
            }
        }

        return "Draw";
    }

    function playBackHandler(history: statusType) {
        if (status.currentMove != history.currentMove) {
            setStatus(history);
        }
    }

    const ROW_NUMBER = 3;
    const COLUMN_NUMBER = 3;

    const [status, setStatus] = useState<statusType>({
        xIsNext: true,
        message: "",
        board: Array(ROW_NUMBER).fill(null).map((_) => Array(COLUMN_NUMBER).fill(null)),
        isFinished: false,
        currentMove: 0
    });
    const [history, setHistory] = useState<Array<statusType>>([]);

    useEffect(() => {
        console.log("effect");
        const message = calculateWinner(status.board);

        if (message) {
            setStatus({
                ...status,
                message: message,
                isFinished: true
            });
        } else {
            setStatus({
                ...status,
                message: `Next player : ${status.xIsNext ? "X" : "O"}`,
            });
        }
        if (history.length == status.currentMove) {
            setHistory([...history, status]);
        }

    }, [status.currentMove])

    return (
        <>
            <Divider className="next-player">
                <span>{status.message}</span>
            </Divider>
            <Board status={status} setStatus={setStatus} history={history} setHistory={setHistory} />
            <List>
                {history.map((historyStatus, index) => {
                    return (
                        <ListItem>
                            <Button className="history" onClick={() => playBackHandler(historyStatus)}>{index > 0 ? `Go to move #${index}` : 'Go to game start'}</Button>
                        </ListItem>
                    );
                })}
            </List>
        </>

    );
}