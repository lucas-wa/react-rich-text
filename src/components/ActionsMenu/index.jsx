import { BsFillTrashFill, BsPaintBucket } from "react-icons/bs";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";

import "./styles.scss"
import shortid from "shortid";
import { useEffect } from "react";

export function ActionsMenu({
    setNotebooks,
    index,
    setActionMenu,
    setModalState,
    setTypesMenu,
    setColorsMenu,
    setTexts }) {



    function handleDeleteNotebooks(index) {

        setTexts(prevState => {
            let prev = [...prevState];

            if (prev.length == 1) prev.push("");
            
            prev.splice(index, 1)

            return prev
        });

        setNotebooks(
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

    function handleDuplicateNotebook(index) {

        setTexts(prevState => {
            let prev = [...prevState];

            prev.splice(index + 1, 0, prev[index])

            return prev
        });

        setNotebooks(
            prevState => {
                const prev = [...prevState]

                const { type, color, background } = prev[index];

                prev.splice(index + 1, 0,
                    {
                        key: shortid.generate(),
                        type,
                        color,
                        background
                    }
                )

                prev[index + 1].key = shortid.generate();

                return prev
            }
        )


        setTimeout(() => {
            const originalNotebookContent = document.querySelector(`.notebook${index} .content`).innerHTML;
            const duplicatedNotebook = document.querySelector(`.notebook${index + 1} .content`);
            duplicatedNotebook.innerHTML = originalNotebookContent;
        }, 0);
    }


    return (

        <div className="ActionsModal">


            <ul>
                <li onMouseDown={e => {
                    handleDeleteNotebooks(index)
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
                    handleDuplicateNotebook(index)
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