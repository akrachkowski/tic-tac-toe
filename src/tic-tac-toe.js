class TicTacToe {
    constructor() {
        this.gameCanvas = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.gameCanvas[rowIndex][columnIndex]) {
            this.gameCanvas[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.isDraw() || !!this.getWinner();
    }

    getWinner() {
        //rows
        for (let i = 0; i < this.gameCanvas.length; i++) {
            const contender = this.gameCanvas[i][0];
            if (this.gameCanvas[i].every((item) => (item === contender))) {
                return contender;
            }
        }

        //columns
        const columns = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        for (let i = 0; i < this.gameCanvas.length; i++) {
            for (let j = 0; j < this.gameCanvas.length; j++) {
                columns[j][i] = this.gameCanvas[i][j];
            }
        }

        for (let i = 0; i < columns.length; i++) {
            const contender = columns[i][0];
            if (columns[i].every((item) => (item === contender))) {
                return contender;
            }
        }

        //diagonals
        const diagonals = [
            [this.gameCanvas[0][0], this.gameCanvas[1][1], this.gameCanvas[2][2]],
            [this.gameCanvas[0][2], this.gameCanvas[1][1], this.gameCanvas[2][0]],
        ];

        for (let i = 0; i < diagonals.length; i++) {
            const contender = diagonals[i][0];
            if (diagonals[i].every((item) => (item === contender))) {
                return contender;
            }
        }

        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameCanvas.length; i++) {
            for (let j = 0; j < this.gameCanvas[i].length; j++) {
                if (!this.gameCanvas[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameCanvas[rowIndex][colIndex];
    }

    // utils
    isRowEqual(rowIndex) {
        if (rowIndex > this.gameCanvas.length) {
            return false;
        }

    }
}

module.exports = TicTacToe;