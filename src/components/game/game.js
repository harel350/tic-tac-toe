import { useState } from "react"
import GameBoard from "../gameBoard/gameBoard"
import LoginGame from "../loginGame/loginGame"
import '../game/game.css'
export default function Game() {
    const [cpuGameMode, setCpuGameMode] = useState(true)
    const [showGame, setShowGame] = useState(false)
    function loginClickHandle(gameMode) {
        if (gameMode === 'CPU') {
            setCpuGameMode(true)
        }
        else {
            setCpuGameMode(false)
        }
        setShowGame(true)
    }
    
    return (
        <div>
            {
                showGame ?
                    <GameBoard
                        gameMode={cpuGameMode}
                        onQuit={()=>setShowGame(false)}
                    />
                    :
                    <LoginGame
                    gameModeSelect={loginClickHandle}
                    />
            }



        </div>
    )
}