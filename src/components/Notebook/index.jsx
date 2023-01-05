import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs"
import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg"
import { Modal } from "../Modal"
import "./styles.css";
import { useRef } from "react";


export function Notebook({ textValue,
    index,
    handleAddNotebooks,
    handleSaveText,
    handleDeleteNotebooks,
    handleMenuModal,
    setIndexEdited,
    notebooks
}) {

    const [html, setHtml] = useState(' ');


    function autoSize(event) {
        const content = event.target;

        content.style.cssText = 'height:auto;'
        content.style.cssText = 'height:' + (textArea.scrollHeight) + 'px';
    }


    function handleKeyEvents(event) {
        if (event.target.value == "" && event.keyCode == 8) {
            handleDeleteNotebooks()
        }
        if (event.ctrlKey && event.keyCode == 66) {

        }
    }




    const divRef = useRef(null)

    useEffect(() => {

        const observer = new MutationObserver(mutations => {
            handleSaveText(index, divRef.current.textContent)
            setHtml(divRef.current.textContent)

        });

        observer.observe(divRef.current, { childList: true, characterData: true, subtree: true });

        // const content = document.querySelector(`.notebook.notebook${index} .content`)

        // content.innerHTML = textValue

        // return () => {observer.disconnect()}
    },
        []);



    useEffect(() => {
        // divRef.current.innerHTML = html;

        // var target = document.createTextNode("\u0001");
        // document.getSelection().getRangeAt(1).insertNode(target);
        // var position = document.querySelector(`.notebook.notebook${index} .content`).innerHTML.indexOf("\u0001");
        // target.parentNode.removeChild(target);

        const selection = window.getSelection();
        const range = document.createRange();

        divRef.current.innerHTML.length > 0 ?
        range.setStart(divRef.current, 1) :
        range.setStart(divRef.current, 0)

        
        range.collapse(true);
        console.log(range.toString())
        selection.removeAllRanges();
        selection.addRange(range);
    }, [html]);


    return (
        (
            <div className={`notebook notebook${index}`}>

                <VscAdd
                    className="icons"
                    onMouseDown={e => handleAddNotebooks(e, index)}
                />



                <CgMenuGridO
                    className="icons"
                    onMouseDown={(e) => {
                        setIndexEdited(index)
                        handleMenuModal(index)
                    }}

                />

                <div
                    ref={divRef}
                    className="content"
                    contentEditable={true}
                >
                    {textValue}
                </div>

                {/* <textarea
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
                /> */}

                {/* <BsFillTrashFill
                    className="icons"
                    onMouseDown={e => handleDeleteNotebooks(e, index)} /> */}

            </div>
        )
    )
}