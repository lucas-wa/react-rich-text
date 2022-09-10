import { useEffect, useState } from "react";
import "./styles.css";


export function SharedTextArea({handleSaveText, handleDeleteNotebooks, value}) {

    const [valueState, setValueState] = useState(value)

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

    useEffect(()=>{
        const div = document.querySelector("div");

        const observer = new MutationObserver(handleSaveText);

        observer.observe(div, {childList: true});
    },
     []);

    return (

        <div 
        className="editableContent" 
        contentEditable={true}
        suppressContentEditableWarning={true}
        >
            {value}
        </div>

        // <textarea onInput={autoSize}
        //     placeholder="Add something"
        //     rows={1}
        //     onChange={handleSaveText}
        //     value={value}
        //     onKeyDown={event => handleKeyEvents(event)}
        //     >
        // </textarea>
    )
}