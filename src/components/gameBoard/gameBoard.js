

import Square from "../square/square"
import ScoreGame from "../scoreGame/scoreGame"
import MessageAlert from '../../components/messageAlert/messageAlert'
import HeaderGameBoard from "../headerGameBoard/headerGameBoard"
import '../gameBoard/gameBoard.css'
import xIcon from '../../assets/icon-x.svg'
import oIcon from '../../assets/icon-o.svg'
import { useEffect, useState } from "react"

export default function GameBoard(props) {
    const [squaresBoard, setSquareBoard] = useState([])
    const [cpuGameMode, setCpuGameMode] = useState(props.gameMode)
    const [openModal, setOpenModal] = useState(false)
    const [winningScore, setWinningScore] = useState({ x: 0, tied: 0, o: 0 })
    const [msgClient, setMsgClient] = useState({ msgHeader: "", msgMain: "", button1Name: "", button2Name: "" })
    const [endGame, setEndGame] = useState(false)
    const [isXturn, setIsXTurn] = useState(true)


    useEffect(() => {
        if (!endGame) {
            let initSquaresBoard = []
            for (let i = 0; i < 9; i++) {
                initSquaresBoard.push({
                    idSquare: i,
                    icon: null,
                    symbol: null
                })
            }
            setIsXTurn(true)
            setSquareBoard(initSquaresBoard)
        }

    }, [endGame])

    function squareClickHandle(item) {
        if (item.symbol !== null) {
            return;
        }

        let changeBoardGame = [...squaresBoard]
        changeBoardGame[item.idSquare].icon = isXturn ? xIcon : oIcon
        changeBoardGame[item.idSquare].symbol = isXturn ? 'X' : 'O'
        
        if (checkWinning(changeBoardGame)) {
            let score = { ...winningScore }
            isXturn ? score.x += 1 : score.o += 1
            setWinningScore(score)
            setEndGame(true)
            setMsgClient(
                {
                    msgHeader: `${isXturn ? 'You won this game' : 'Oo no, you lost'}`,
                    msgMain: `${isXturn ? 'X' : 'O'} win in this game`,
                    button1Name: 'Quit',
                    button2Name: 'Round again',
                    button1Click: () => {setOpenModal(false);props.onQuit()},
                    button2Click: () => restartGameHandle()
                }
            )
            setOpenModal(true)

        }
        else {
            let howMuchSquaresFill = changeBoardGame.filter(item => item.symbol !== null)
            if(howMuchSquaresFill.length === 9){
                roundTiedHandle()
            }
            else{
                if(cpuGameMode)
                cpuGameModeHandle(changeBoardGame)
            }
        }
        //if no one win update the gameBoard and change to other player
        setIsXTurn(cpuGameMode ? true: !isXturn)
        setSquareBoard(changeBoardGame)
    }
    function checkWinning(boardGame) {
        let howMuchSquaresFill = boardGame.filter(item => item.symbol !== null)
        if (howMuchSquaresFill.length < 5) {
            return false;
        }
        else {

            for (let i = 0; i < boardGame.length; i++) {
                if ((boardGame[i].symbol === boardGame[i + 1].symbol) && (boardGame[i + 1].symbol === boardGame[i + 2].symbol)) {
                    if (boardGame[i].symbol !== null) {

                        return true
                    }

                    // [0,1,2][3,4,5][6,7,8]
                }
                i += 2
            }
            for (let i = 0; i < boardGame.length / 3; i++) {
                console.log('2')
                if ((boardGame[i].symbol === boardGame[i + 3].symbol) && (boardGame[i + 3].symbol === boardGame[i + 6].symbol)) {
                    if (boardGame[i].symbol !== null) {

                        return true
                    }

                    // [0,3,6][1,4,7][2,5,8]
                }
            }
            if ((boardGame[0].symbol === boardGame[4].symbol) && (boardGame[4].symbol === boardGame[8].symbol)) {
                if (boardGame[0].symbol !== null) {
                    return true
                }


                // [0,4,8]
            }
            if ((boardGame[2].symbol === boardGame[4].symbol) && (boardGame[4].symbol === boardGame[6].symbol)) {
                if (boardGame[2].symbol !== null) {
                    return true
                }


                // [2,4,6]
            }
            if (howMuchSquaresFill.length == 9) {
                roundTiedHandle()
            }
            return false
        }



    }
    function restartGameHandle() {
        setOpenModal(false)
        setEndGame(false)

    }
    function roundTiedHandle() {
        setMsgClient(
            {
                msgHeader: ``,
                msgMain: `ROUND TIED`,
                button1Name: 'Quit',
                button2Name: 'Next round',
                button1Click: () => {setOpenModal(false);props.onQuit()},
                button2Click: () => restartGameHandle()
            }
        )
        let score = { ...winningScore }
        score.tied += 1

        setWinningScore(score)
        setOpenModal(true)
        setEndGame(true)
    }
    function restart() {
        setMsgClient(
            {
                msgHeader: ``,
                msgMain: `RESTART GAME?`,
                button1Name: 'no, cancel',
                button2Name: 'yes, restart',
                button1Click: () => { setOpenModal(false);},
                button2Click: () => restartGameHandle()
            }
        )
        setOpenModal(true)
        setEndGame(true)


    }
    function cpuGameModeHandle(changeBoardGame){
            let cpuDone = false
            while (!cpuDone) {

                let idSquare = Math.floor(Math.random() * 9)
                if (changeBoardGame[idSquare].symbol === null) {
                    changeBoardGame[idSquare].icon = oIcon
                    changeBoardGame[idSquare].symbol = 'O'
                    console.log(changeBoardGame)
                    cpuDone = true
                }
            }
            if (checkWinning(changeBoardGame)) {
                let score = { ...winningScore }
                score.o += 1
                setWinningScore(score)
                setEndGame(true)
                setMsgClient(
                    {
                        msgHeader: `'Oo no, you lost'`,
                        msgMain: `'O' win in this game`,
                        button1Name: 'Quit',
                        button2Name: 'Round again',
                        button1Click: () => { },
                        button2Click: () => restartGameHandle()
                    }
                )
                setOpenModal(true)
                
            }

    }

    return (
        <div className="bodyContainer">
            <div className="boardContainer" >
                <HeaderGameBoard restart={restart} isXturn={isXturn} />
                {squaresBoard.map(item => {
                    return (
                        <Square
                            onClick={squareClickHandle}
                            data={item}
                            icon={item.icon}
                            key={item.idSquare} />
                    )
                })}
                <ScoreGame winningScore={winningScore} />
            </div>


            {

                <MessageAlert
                    isOpen={openModal}
                    msgClient={msgClient}


                />
            }



        </div>
    )
}