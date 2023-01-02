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

    function handleMenuModal(index){

        const notebookLocation = document
        .querySelector(`.notebook${index}`)
        .getBoundingClientRect()

        const modal_wrapper = document.querySelector(`.modal-wrapper`)
        const menu = document.querySelector(`.modal-wrapper .modal`);

        
        menu.style.marginTop = notebookLocation.top.toString() + "px"
        menu.style.marginLeft = (notebookLocation.left/2).toString() + "px"
        console.log(menu.style.marginTop)

        modal_wrapper.classList.toggle("sr-only")
    }



    return (
        <div className="container">

            <Modal />


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
                    />
                )
            }
        </div>
    )
}