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
    modalState,
    setModalState,
    setModalRequest,
    notebooks,
    setNotebooks,
    type
}) {

    const [iconState, setIconState] = useState(false)
    
    
    
    function handleAddNotebooks(index) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                
                prev.splice(index + 1, 0, { type: "text", value: "" })
                
                return prev
            }
            )
    }
        
        
        const divRef = useRef(null)
        
    useEffect(() => {
            
            const observer = new MutationObserver(mutations => {
                handleSaveText(index, divRef.current.innerHTML)
            });
            
            observer.observe(divRef.current, { childList: true, characterData: true, subtree: true });
            
            
            return () => {observer.disconnect()}
        },
    []);
        
        
        
    useEffect(() => {
        const range = document.createRange()
        range.selectNodeContents(divRef.current)
        range.collapse(false)

        const selection = document.getSelection();
        selection.removeAllRanges()
        selection.addRange(range)

    }, [textValue]);

    useEffect(()=>{

        const icons = document.querySelectorAll(`.notebook${index} .icons`)

        for(let icon of icons){
            if(iconState){
                icon.classList.remove("hide")
                icon.classList.add("appear")
            }else if(!modalState){
                icon.classList.remove("appear")
                icon.classList.add("hide")
            }
        }

    }, [iconState, modalState])

    return (
        (
            <div className={`notebook notebook${index}`}
                onMouseOver={() => {
                    setIconState(true)
                }}

                onMouseLeave={() => {
                    setIconState(false)
                }}
            >

                <VscAdd
                    className={"icons"}
                    onMouseDown={() => {
                        // document.querySelector(`.notebook${index}`).focus()
                        setIndexEdited(index)
                        setModalRequest("AddNotebook")
                        setModalState(true)
                    }}
                />



                <CgMenuGridO
                    className={"icons"}
                    onMouseDown={(e) => {
                        // document.querySelector(`.notebook${index}`).focus()
                        setIndexEdited(index)
                        setModalRequest("EditNotebook")
                        setModalState(true)
                    }}

                />

                <div
                    ref={divRef}
                    className={`content ` + type}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    dangerouslySetInnerHTML={{__html: textValue}}
                    placeholder={"Escreva algo..."}
                />

            </div>
        )
    )
}