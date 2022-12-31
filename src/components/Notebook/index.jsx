import { VscAdd } from "react-icons/vsc";
import {BsFillTrashFill} from "react-icons/bs"
import { useEffect, useState } from "react";
import "./styles.css";


export function Notebook({textValue, index, handleAddNotebooks, handleSaveText}) {

    const [valueState, setValueState] = useState('')


    function autoSize(event) {
        const textArea = event.target;

        textArea.style.cssText = 'height:auto;'
        textArea.style.cssText = 'height:' + (textArea.scrollHeight) + 'px';
    }


    function handleKeyEvents(event){
        if(event.target.value == "" && event.keyCode == 8){
            handleDeleteNotebooks()
        }
        if(event.ctrlKey && event.keyCode == 66){

        }
    }

    // useEffect(()=>{
    //     const div = document.querySelector(`#notebook${index}`);

    //     const observer = new MutationObserver(handleSaveText);

    //     observer.observe(div, {childList: true});
    // },
    //  []);

    return (
        (
            <div className="notebook">

                <VscAdd 
                className="icons"
                onMouseDown={e => handleAddNotebooks(e, index)}
                />

                <textarea
                rows={1}
                type="text" 
                name="" 
                id=""
                onChange={e => {
                    const text = e.target.value
                    autoSize(e)
                    handleSaveText(e, index, text)
                }} 
                value={textValue}
                />

                <BsFillTrashFill
                className="icons"/>

            </div>
        )
    )
}