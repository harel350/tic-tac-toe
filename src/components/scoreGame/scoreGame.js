import ScoreGameBox from "../scoreGameBox/scoreGameBox"
import '../scoreGame/scoreGame.css'
export default function ScoreGame(props){
    return(
        <div className="scoreGameContainer">
            <ScoreGameBox color='#31C3BD' score={props.winningScore.x} title='X (You)'/>
            <ScoreGameBox color='#A8BFC9' score={props.winningScore.tied} title='Tied'/>
            <ScoreGameBox color='#F2B137' score={props.winningScore.o} title='O (CPU)'/>
        </div>
    )
}

