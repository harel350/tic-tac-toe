import '../scoreGameBox/scoreGameBox.css'

export default function ScoreGameBox(props){
    return(
        <div className="ScoreGameBoxContainer" style={{backgroundColor:props.color}}>
            <div className="title">{props.title}</div>
            <div className="score">{props.score}</div>
        </div>
    )
}