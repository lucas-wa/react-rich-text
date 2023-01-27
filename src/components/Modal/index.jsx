import { useEffect } from "react";
import { useState } from "react"
import { ActionsMenu } from "../ActionsMenu";
import { AddNotebookMenu } from "../AddNotebookMenu";
import { ColorMenu } from "../ColorMenu";
import { MenuTypes } from "../MenuTypes";
import { SelectorMenu } from "../SelectorMenu";

import "./styles.scss"

export function Modal({ index,
    setModalState,
    setNotebooks,
    modalRequest,
    selectorMenu,
    setTexts,
 }) {

    const [addNotebookMenu, setAddNotebookMenu] = useState(modalRequest == "AddNotebook");
    const [actionsMenu, setActionMenu] = useState(modalRequest == "EditNotebook");
    const [colorsMenu, setColorsMenu] = useState(modalRequest == "EditColor");
    const [typesMenu, setTypesMenu] = useState(false);

    useEffect(() => {
        const notebookLocation = document
            .querySelector(`.notebook${index} .icons`)
            .getBoundingClientRect()

        const modal = document.querySelector(".modal-wrapper .modal")

        modal.style.top = (notebookLocation.bottom + 10).toString() + "px"
        modal.style.left = notebookLocation.left.toString() + "px"

    }, [])



    return (

        <div className={
            "modal-wrapper"
        }
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
                    setTexts={setTexts}
                />}


                {actionsMenu && <ActionsMenu
                    typesMenu={typesMenu}
                    index={index}
                    setNotebooks={setNotebooks}
                    setActionMenu={setActionMenu}
                    setModalState={setModalState}
                    setTypesMenu={setTypesMenu}
                    setColorsMenu={setColorsMenu}
                    setTexts={setTexts}
                />}

                {typesMenu && <MenuTypes
                    index={index}
                    setTypesMenu={setTypesMenu}
                    setModalState={setModalState}
                    setNotebooks={setNotebooks}
                />}

                {colorsMenu && <ColorMenu
                    index={index}
                    setColorsMenu={setColorsMenu}
                    setModalState={setModalState}
                    setNotebooks={setNotebooks}
                />}

                {
                    selectorMenu &&
                    <SelectorMenu/>
                }

            </div>



        </div>
    )
}