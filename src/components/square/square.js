import { useState,useEffect } from 'react'
import '../square/square.css'


export default function Square(props) {
    const [isClicked,setIsClicked] = useState(false)
    useEffect(()=>{
        if(props.icon !== null){
            setIsClicked(true)
        }
        else{
            setIsClicked(false)
        }
       
    },[props.icon])
    function onSquarePress(){
        setIsClicked(true)
        props.onClick(props.data)
    }
    return (
        <div className="squareContainer" onClick={onSquarePress}>
            
            { isClicked &&
                <img src={props.icon} alt=""/> 
             
                    
            }
        </div>
    )
}