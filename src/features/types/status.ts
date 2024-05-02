export type statusType = {
    xIsNext: boolean,
    message: string,
    board: Array<Array<string | null>>,
    isFinished: boolean,
    currentMove: number
};