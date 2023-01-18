import { BsFillTrashFill, BsPaintBucket } from "react-icons/bs";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";

import "./styles.scss"

export function ActionsMenu({ setNotebooks, index, setActionMenu, setModalState, setTypesMenu, setColorsMenu }) {



    function handleDeleteNotebooks(index) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                
                if(prev.length == 1) prev.push({type:"text", text:""})
                
                prev.splice(index, 1)


                return prev
            }
        )


    }

    function handleDuplicateNotebook(index) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                
                prev.splice(index + 1, 0, {...prev[index]})

                return prev
            }
        )
    }

    return (

        <div className="ActionsModal">


            <ul>
                <li onMouseDown={e => {
                    handleDeleteNotebooks(index)
                    setModalState(false)

                }}>
                    <BsFillTrashFill />
                    <p>Deletar</p>
                </li>

                <li onMouseDown={e => {
                    handleDuplicateNotebook(index)
                    setModalState(false)
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