import { useEffect } from "react";
import { useState } from "react"
import { ActionsMenu } from "../ActionsMenu";
import { AddCellsMenu } from "../AddCellsMenu";
import { ColorMenu } from "../ColorMenu";
import { MenuTypes } from "../MenuTypes";
import { SelectorMenu } from "../SelectorMenu";

import "./styles.scss"

export function Modal({ 
    index,
    setModalState,
    setCells,
    modalRequest,
    setTexts,
}) {

    const [addNotebookMenu, setAddNotebookMenu] = useState(modalRequest == "AddNotebook");
    const [actionsMenu, setActionMenu] = useState(modalRequest == "EditNotebook");
    const [colorsMenu, setColorsMenu] = useState(modalRequest == "EditColor");
    const [typesMenu, setTypesMenu] = useState(false);
    const [selectorMenu, setSelectorMenu] = useState(modalRequest == "SelectorMenu")


    useEffect(() => {
        

        const modal = document.querySelector(".modal-wrapper .modal")
        
        if (modalRequest !== "SelectorMenu") {

            const cellLocation = document
            .querySelector(`.cell${index} .icons`)
            .getBoundingClientRect()

            modal.style.top = (cellLocation.bottom + 10).toString() + "px"
            modal.style.left = cellLocation.left.toString() + "px"

        } else {

            const selection = document.getSelection();
            const range = selection.getRangeAt(0);

            const selectorMenuHeight = document
            .querySelector(".SelectorMenuContainer")
            .getBoundingClientRect()
            .height;


            const {left, top} = range.getBoundingClientRect();
            modal.style.top = (top - selectorMenuHeight - 5).toString() + "px"
            modal.style.left = (left).toString() + "px"


        }

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
            >


                {addNotebookMenu
                    && <AddCellsMenu
                        typesMenu={typesMenu}
                        index={index}
                        setCells={setCells}
                        setActionMenu={setActionMenu}
                        setModalState={setModalState}
                        setTypesMenu={setTypesMenu}
                        setTexts={setTexts}
                    />}


                {actionsMenu && <ActionsMenu
                    typesMenu={typesMenu}
                    index={index}
                    setCells={setCells}
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
                    setCells={setCells}
                />}

                {colorsMenu && <ColorMenu
                    index={index}
                    setColorsMenu={setColorsMenu}
                    setModalState={setModalState}
                    setCells={setCells}
                />}

                {
                    selectorMenu &&
                    <SelectorMenu
                        index={index}
                        setModalState={setModalState}
                        setTexts={setTexts}
                    />
                }

            </div>

        </div>
    )
}