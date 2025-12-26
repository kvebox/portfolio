import './styles.css';
import * as React from 'react';

const emptyGrid = new Array(3).fill([]).map(() => new Array(3).fill(0));

export const TicTacToe = () => {
    const [grid, setGrid] = React.useState(emptyGrid)
    const [gameOver, setGameOver] = React.useState(0)
    const [player, setPlayer] = React.useState(true)

    const makeMove = (rowIdx:number, columnIdx:number) => {
        if (gameOver !== 0) return
        if (grid[rowIdx][columnIdx] === 0) {
            // React only does a shallow object check for state updates. If modifying 
            // an object/array in place, must make a new copy to trigger an update.
            let clone = structuredClone(grid)
            clone[rowIdx][columnIdx] = player ? 1 : -1
            setGrid(clone)
            checkWin(clone, setGameOver)
            setPlayer(!player)
        }
    }

    return (
        <>
        {gameOver !== 0 && <div id="status">{gameOver === 1 ? 'You Win' : 'You Lose'}!</div>}
        <div id="grid">
            {grid.map((row, rowIdx) => {
                return (
                    <div key={`tictac-${rowIdx}`} className="row">
                        {row.map((cell, columnIdx) => {
                            return (
                                <div 
                                    key={`tictac-${columnIdx}`}
                                    className="cell"
                                    onClick={() => {
                                        makeMove(rowIdx, columnIdx)
                                    }}>
                                        {cell === 0 ? '' : cell === 1 ? 'X' : 'O'}
                                </div>
                            )
                        })}
                    </div>
                )})
            }
        </div>
        <button onClick={() => {
            setGrid(emptyGrid)
            setPlayer(true)
            setGameOver(0)
        }}>Reset</button>
        </>
    )
}

const checkWin = (grid: number[][], setGameOver: React.Dispatch<React.SetStateAction<number>>) => {
    let player = '111'
    let cpu = '-1-1-1'

    let d = ''
    let n = ''
    for (let i = 0; i < grid.length; i++) {
        let r = ''
        let c = ''

        for (let j = 0; j < grid[0].length; j++) {
            console.log(i,j)
            r += grid[i][j]
            c += grid[j][i]

            if (i === j) {
                d += grid[i][j]
            }

            if (j === grid[0].length - i - 1) {
                n += grid[i][j]
            }
        }

        if (r === player || c === player || d === player || n === player) {
            setGameOver(1)
            return
        }
        if (r === cpu || c === cpu || d === cpu || n === cpu) {
            setGameOver(-1)
            return
        }
    }
    
    return
}

const cpuMoves = (grid: number[][]) => {
    return grid
}