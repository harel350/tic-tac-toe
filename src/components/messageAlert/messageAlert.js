import { useState } from 'react';
import Modal from 'react-modal'
import '../messageAlert/messageAlert.css'
const customStyles = {
    content: {
        width:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems : 'center',
        height: 'min-content',
        padding:0,
        inset:0,
        transform: 'translate(0%, 50%)',
        backgroundColor:'#1F3641'
    },
};
export default function MessageAlert(props) {

    function button1Handle(){
        props.msgClient.button1Click()
    }
    function button2Handle(){
        props.msgClient.button2Click()
        
    }
    return (
        
            <Modal
                isOpen={props.isOpen}
                
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <header>
                    <h3>{props.msgClient.msgHeader}</h3>
                </header>
                <main>
                    <h2>{props.msgClient.msgMain}</h2>
                </main>
                <footer>
                    <button className='button1' onClick={button1Handle}>{props.msgClient.button1Name}</button>
                    <button className='button2' onClick={button2Handle}>{props.msgClient.button2Name}</button>
                </footer>
            </Modal>
        
            
       

    )
}