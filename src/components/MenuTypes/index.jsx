import { useEffect } from "react"
import "./styles.scss"

export function MenuTypes({ index, setTypesMenu, setModalState, setNotebooks }) {


    function turnNotebook(className) {
        const notebookContent = document.querySelector(`.notebook${index} .content`)

        notebookContent.classList.remove(...notebookContent.classList)
        notebookContent.classList.add("content", className)

        setNotebooks(prevState => {
            const prev = [...prevState]
            
            prev[index].type = className

            return prev
            
        })

    }


    return (
        <div className="ModalTypesContainer " onMouseLeave={() => setTypesMenu(false)}>

            <ul onMouseDown={()=> setModalState(false)}>
                <li onMouseDown={() => {
                    turnNotebook("text")
                }}>
                    <p>TXT Texto</p>
                </li>

                <li onMouseDown={() => {
                    turnNotebook("heading2")
                }}>
                    <p>H2 Subtítulo</p>
                </li>
            </ul>

        </div>
    )
}