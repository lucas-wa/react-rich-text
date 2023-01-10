import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs"
import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg"
import { Modal } from "../Modal"
import "./styles.css";
import { useRef } from "react";



export function Notebook({ textValue,
    index,
    handleSaveText,
    setIndexEdited,
    setModalState,
    setNotebooks,
    type
}) {
    
    
    
    function handleAddNotebooks(event, index) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                
                prev.splice(index + 1, 0, { textType: "text", value: "" })
                
                return prev
            }
            )
        }
        
        
        const divRef = useRef(null)
        
        useEffect(() => {
            
            const observer = new MutationObserver(mutations => {
                handleSaveText(index, divRef.current.innerHTML)
                // console.log(difRef.current.ht,m)
                // setHtml(divRef.current.innerHTML)
                
            });
            
            observer.observe(divRef.current, { childList: true, characterData: true, subtree: true });
            
            // const content = document.querySelector(`.notebook.notebook${index} .content`)
            
            // content.innerHTML = textValue
            
            return () => {observer.disconnect()}
        },
        []);
        
        
        
    useEffect(() => {
        // divRef.current.innerHTML = textValue;

        // var target = document.createTextNode("\u0001");
        // document.getSelection().getRangeAt(1).insertNode(target);
        // var position = document.querySelector(`.notebook.notebook${index} .content`).innerHTML.indexOf("\u0001");
        // target.parentNode.removeChild(target);

        const range = document.createRange()
        range.selectNodeContents(divRef.current)
        range.collapse(false)

        const selection = document.getSelection();
        selection.removeAllRanges()
        selection.addRange(range)

    }, [textValue]);


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
                        setModalState(true)
                    }}

                />

                <div
                    ref={divRef}
                    className={`content ` + type}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    dangerouslySetInnerHTML={{__html: textValue}}
                />

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

            </div>
        )
    )
}