import { BsFillTrashFill, BsPaintBucket } from "react-icons/bs";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";

import "./styles.scss"
import shortid from "shortid";

export function ActionsMenu({
    setCells,
    index,
    setModalState,
    setTypesMenu,
    setColorsMenu,
    setTexts }) {



    function handleDeleteCells(index) {

        setTexts(prevState => {
            let prev = [...prevState];

            if (prev.length == 1) prev.push("");
            
            prev.splice(index, 1)

            return prev
        });

        setCells(
            prevState => {
                const prev = [...prevState]

                if (prev.length == 1) prev.push({
                    key: shortid.generate(),
                    type: "text",
                    color: "inherint",
                    background: "inherint"
                })

                prev.splice(index, 1)


                return prev
            }
        )


    }

    function handleDuplicateCells(index) {

        setTexts(prevState => {
            let prev = [...prevState];

            prev.splice(index + 1, 0, prev[index])

            return prev
        });

        setCells(
            prevState => {
                const prev = [...prevState]

                const { type, color, background, language } = prev[index];

                prev.splice(index + 1, 0,
                    {
                        key: shortid.generate(),
                        type,
                        color,
                        background,
                        language
                    }
                )

                prev[index + 1].key = shortid.generate();

                return prev
            }
        )

    }


    return (

        <div className="ActionsModal">


            <ul>
                <li onMouseDown={e => {
                    handleDeleteCells(index)
                    setModalState(false)
                }}

                    onMouseEnter={() => {
                        setTypesMenu(false)
                        setColorsMenu(false)
                    }}
                >
                    <BsFillTrashFill />
                    <p>Deletar</p>
                </li>

                <li onMouseDown={e => {
                    handleDuplicateCells(index)
                    setModalState(false)
                }}

                    onMouseEnter={() => {
                        setTypesMenu(false)
                        setColorsMenu(false)
                    }}
                >
                    <HiOutlineDuplicate />
                    <p>Duplicar</p>
                </li>

                <li onMouseEnter={() => {
                    setColorsMenu(false)
                    setTypesMenu(true)
                }}>
                    <BsArrowReturnRight />
                    <p>Tornar um</p>
                </li>

                <li onMouseEnter={e => {
                    setTypesMenu(false)
                    setColorsMenu(true)
                }}
                >
                    <BsPaintBucket />
                    <p>Cores</p>
                </li>
            </ul>
        </div>
    )
}