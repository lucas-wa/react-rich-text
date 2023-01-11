import { useEffect } from "react";
import { useState } from "react"
import { ActionsMenu } from "../ActionsMenu";
import { AddNotebookMenu } from "../AddNotebookMenu";
import { MenuTypes } from "../MenuTypes";

import "./styles.scss"

export function Modal({ index,
    setModalState,
    setNotebooks,
    modalRequest
 }) {

    const [addNotebookMenu, setAddNotebookMenu] = useState(modalRequest == "AddNotebook");
    const [actionsMenu, setActionMenu] = useState(modalRequest == "EditNotebook");
    const [typesMenu, setTypesMenu] = useState(false);

    useEffect(() => {
        const notebookLocation = document
            .querySelector(`.notebook${index}`)
            .getBoundingClientRect()

        const modal = document.querySelector(".modal-wrapper .modal")

        modal.style.top = notebookLocation.bottom.toString() + "px"
        modal.style.left = notebookLocation.left.toString() + "px"

    }, [])


    return (

        <div className="modal-wrapper"
            onMouseDown={(e) => {
                if (e.target.classList.contains("modal-wrapper")) {
                    setModalState(false)
                }
            }}


        >

            <div className="modal"
                onMouseLeave={e => {
                    setModalState(false)
                }}
            >


                {addNotebookMenu 
                && <AddNotebookMenu
                    typesMenu={typesMenu}
                    index={index}
                    setNotebooks={setNotebooks}
                    setActionMenu={setActionMenu}
                    setModalState={setModalState}
                    setTypesMenu={setTypesMenu}
                />}


                {actionsMenu && <ActionsMenu
                    typesMenu={typesMenu}
                    index={index}
                    setNotebooks={setNotebooks}
                    setActionMenu={setActionMenu}
                    setModalState={setModalState}
                    setTypesMenu={setTypesMenu}
                />}

                {typesMenu && <MenuTypes
                    index={index}
                    setTypesMenu={setTypesMenu}
                    setModalState={setModalState}
                    setNotebooks={setNotebooks}
                />}

            </div>



        </div>
    )
}