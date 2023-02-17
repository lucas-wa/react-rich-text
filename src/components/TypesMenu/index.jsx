import "./styles.scss"

import { BiCodeAlt } from "react-icons/bi"
import { RiHeading, RiText } from "react-icons/ri"

export function TypesMenu({ index, setTypesMenu, setModalState, setCells }) {


    function handleTurnCell(className) {
        const cellContent = 
        
        document.querySelector(`.cell${index} .content`) ||
        document.querySelector(`.cell${index} .codeContent`)

        cellContent.classList.remove(...cellContent.classList)
        cellContent.classList.add("content", className)

        setCells(prevState => {
            const prev = [...prevState]
            
            prev[index].type = className

            return prev
            
        })

    }


    return (
        <div className="ModalTypesContainer " onMouseLeave={() => setTypesMenu(false)}>

            <ul onMouseDown={()=> setModalState(false)}>
                <li onMouseDown={() => {
                    handleTurnCell("text")
                }}>
                    <RiText/>
                    <p>Texto</p>
                </li>

                <li onMouseDown={() => {
                    handleTurnCell("heading2")
                }}>
                    <RiHeading/>
                    <p>Subtítulo</p>
                </li>

                <li onMouseDown={() => {
                    handleTurnCell("codeBlock")
                }}>
                    <BiCodeAlt/>
                    <p>Código</p>
                </li>
            </ul>

        </div>
    )
}