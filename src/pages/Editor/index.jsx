import "./styles.css";

import { Notebook } from "../../components/Notebook"
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "../../components/Modal";

export function Editor() {
    const [notebooks, setNotebooks] = useState(
        [
            {textType: "text", value: ""}
        ]);

    const [indexEdited, setIndexEdited] = useState(0)
    


    function handleAddNotebooks(event, index) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]

                prev.splice(index + 1, 0, {textType: "text", value: ""})

                return prev
            }
        )
    }

    function handleDeleteNotebooks(event, index){
        setNotebooks(
            prevState => {
                const prev = [...prevState]

                prev.splice(index, 1)

                return prev
            }
        )

        if(notebooks.length <= 1){
            setNotebooks([{textType: "text", value: ""}])
        }
    }

    function handleSaveText(event, index, newValue) {

        setNotebooks(
            prevState => {
                const prev = [...prevState]
    
                prev[index].value = newValue
    
                return prev
            }
        )

    }

    function handleDuplicateNotebook(index){
        setNotebooks(
            prevState => {
                const prev = [...prevState]

                const value = prev[index].value

                prev.splice(index + 1, 0, {type: "text", value: value})

                return prev
            }
        )
    }

    function handleMenuModal(index){

        const notebookLocation = document
        .querySelector(`.notebook${index}`)
        .getBoundingClientRect()

        const modal_wrapper = document.querySelector(`.modal-wrapper`)
        const menu = document.querySelector(`.modal-wrapper .modal`);

        const modal_wrapper_width = modal_wrapper.getBoundingClientRect().width

        
        
        menu.style.top = notebookLocation.top.toString() + "px"
        menu.style.right = (notebookLocation.right + 20).toString() + "px"
        
        console.log(menu)

        modal_wrapper.classList.toggle("sr-only")
    }



    return (
        <div className="container">

            <Modal
            handleDeleteNotebooks = {handleDeleteNotebooks}
            handleDuplicateNotebook = {handleDuplicateNotebook}
            index = {indexEdited}
            />


            <input type="text" name="" id="title" placeholder="Title" />

            {
                notebooks.map((notebook, index) => 
                    <Notebook key={index}
                    textValue = {notebook.value}
                    index = {index}
                    handleAddNotebooks = {handleAddNotebooks}
                    handleSaveText = {handleSaveText}
                    handleDeleteNotebooks = {handleDeleteNotebooks}
                    handleMenuModal = {handleMenuModal}
                    setIndexEdited = {setIndexEdited}
                    />
                )
            }
        </div>
    )
}