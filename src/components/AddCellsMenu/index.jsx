import shortid from "shortid"
import "./styles.scss"

import { BiCodeAlt } from "react-icons/bi"
import { RiHeading, RiText } from "react-icons/ri"


export function AddCellsMenu({
    setCells,
    index,
    setModalState,
    setTexts
}) {

    function handleAddCells(index, type) {

        setTexts(prevState => {
            let prev = [...prevState];

            prev.splice(index + 1, 0, "")

            return prev
        });

        setCells(
            prevState => {
                const prev = [...prevState]

                const newElement =
                {
                    key: shortid.generate(),
                    type,
                    color: "inherint",
                    background: "inherint",
                }

                prev.splice(index + 1, 0, newElement)

                return prev
            }
        )

     
    }

    return (
        <div className="AddCellsMenuContainer">
            <ul>
                <li onMouseDown={() => {
                    handleAddCells(index, "text")
                    setModalState(false)
                }}>
                    <RiText/>
                    <p>Texto</p>
                </li>

                <li onMouseDown={() => {
                    handleAddCells(index, "heading2")
                    setModalState(false)

                }}>
                    <RiHeading/>
                    <p>Subtítulo</p>
                </li>

                <li onMouseDown={() => {
                    handleAddCells(index, "codeBlock")
                    setModalState(false)

                }}>
                    <BiCodeAlt/>  
                    <p>Código</p>
                </li>
            </ul>
        </div>
    )
}