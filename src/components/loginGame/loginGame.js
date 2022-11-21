import xIcon from '../../assets/icon-x.svg'
import oIcon from '../../assets/icon-o.svg'
import '../loginGame/loginGame.css'

export default function LoginGame(props) {
    
    return (
        <div className='loginGameContainer'>

            <div className='symbolLoginContainer'>
                <img className='symbolLoginImg' src={xIcon} alt="" />
                <img className='symbolLoginImg' src={oIcon} alt="" />
            </div>

            <div className='choseContainer'>
                <div className='titleContainer'>
                    <p>PICK PLAYER FOR THE GMAE</p>
                </div>
                <div className='choseSymbolContainer'>
                    <img className='xIcon' src={xIcon} alt='' />
                    <img className='oIcon' src={oIcon} alt='' />
                </div>
                <div className='noteContainer'>
                    <p>Remember X goes first</p>
                </div>
            </div>
            <div className='buttonsContainer'>
                <button style={{background:'#FFC860'}} onClick={()=>props.gameModeSelect('CPU')}>New game(VS CPU)</button>
                <button style={{background:'#65E9E4'}}onClick={()=>props.gameModeSelect('player')}>New game(VS PLAYER)</button>
            </div>
        </div>
    )
}