import { useEffect } from "react"
import "./styles.scss"

export function ModalTypes({ typesModal, index }) {


    function turnNotebook(className) {
        const notebookContent = document.querySelector(`.notebook${index} .content`)

        notebookContent.classList.remove(...notebookContent.classList)
        notebookContent.classList.add("content", className ? className : null)

    }

    useEffect(() => {

        const modalLocation = document.querySelector(".modal")
            .getBoundingClientRect()

        const modalTypes = document.querySelector(".ModalTypesContainer")

        modalTypes.style.top = modalLocation.top.toString() + "px"
        modalTypes.style.left = (modalLocation.right + 10).toString() + "px"

    }, [typesModal])

    return (
        <div className="ModalTypesContainer ">

            <ul>
                <li onMouseDown={() => {
                    document.querySelector(".modal-wrapper").classList.add("sr-only")
                    turnNotebook("")
                }}>
                    <p>TXT Texto</p>
                </li>

                <li onMouseDown={() => {
                    turnNotebook("heading2")
                    document.querySelector(".modal-wrapper").classList.add("sr-only")
                }}>
                    <p>H2 Subtítulo</p>
                </li>
            </ul>

        </div>
    )
}