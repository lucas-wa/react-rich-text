import { VscAdd } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs"
import { useEffect, useState } from "react";
import { CgChevronDoubleLeft, CgMenuGridO } from "react-icons/cg"
import { Modal } from "../Modal"
import "./styles.css";
import { useRef } from "react";
import ContentEditable from "react-contenteditable";



export function Notebook({
    setNotebooks,
    setIndexEdited,
    setModalRequest,
    setModalState,
    textValue,
    index,
    handleSaveText,
    background,
    color,
    type }) {



    const divRef = useRef(null);


    const [iconState, setIconState] = useState(false)

    

    useEffect(() => {


        const icons = document.querySelectorAll(`.notebook${index} .icons`)



        for (let icon of icons) {
            icon.classList.remove(iconState ? "hide" : "appear")
            icon.classList.add(iconState ? "appear" : "hide")
        }


        // for (let icon of icons) {
        //     if (iconState) {
        //         icon.classList.remove("hide")
        //         icon.classList.add("appear")
        //     } else if (!modalState) {
        //         icon.classList.remove("appear")
        //         icon.classList.add("hide")
        //     }
        // }

    }, [iconState])


    return (

        <>


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
                        setModalRequest("AddNotebook")
                        setIndexEdited(index)
                        setModalState(true)
                    }}
                />



                <CgMenuGridO
                    className={"icons"}
                    onMouseDown={(e) => {
                        // document.querySelector(`.notebook${index}`).focus()
                        setModalRequest("EditNotebook")
                        setIndexEdited(index)
                        setModalState(true)
                    }}

                />


                <ContentEditable
                    innerRef={divRef}
                    className={`content ${type}`}
                    html={textValue}
                    placeholder={"Escreva algo"}
                    onChange={() => handleSaveText(index, divRef.current.innerHTML)}
                    onSelect={e => {


                        if (document.getSelection().toString().length > 0) {
                            setIndexEdited(index)
                            setModalRequest("SelectorMenu")
                            setModalState(true)
                        }
                    }}
                    style={{
                        color,
                        background
                    }}
                />
            </div>
        </>


    )
}