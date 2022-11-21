import xIcon from '../../assets/icon-x.svg'
import oIcon from '../../assets/icon-o.svg'
import restartIcon from '../../assets/icon-restart.svg'
import '../headerGameBoard/headerGameBoard.css'

export default function HeaderGameBoard(props) {
    return (
        <div className='headerGameBoardContainer'>
            <div className='symbolContainer'>
                <img className='symbolImg' src={xIcon} alt="" />
                <img className='symbolImg' src={oIcon} alt="" />
            </div>
            <div className='turnHowContainer'>
                <div>{props.isXturn ? 'X' : 'O'} TURN</div>
            </div>
            <div className='restartContainer'>
                <img className='restartImg symbolImg' src={restartIcon} onClick={props.restart} />
            </div>

        </div>
    )
}