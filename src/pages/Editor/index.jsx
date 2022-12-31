import "./styles.css";

import { Notebook } from "../../components/Notebook"
import { useState } from "react";
import { useEffect } from "react";

export function Editor() {
    const [notebooks, setNotebooks] = useState(
        [
            {textType: "text", value: ""}
        ]);

    function handleAddNotebooks(event, index) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                console.log(index)

                prev.splice(index + 1, 0, {textType: "text", value: ""})

                return prev
            }
        )
    }

    function handleDeleteNotebooks(event, index){
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                console.log(index)

                prev.splice(index, 1)

                return prev
            }
        )
    }

    function handleSaveText(event, index, newValue) {

        setNotebooks(
            prevState => {
                const prev = [...prevState]
                console.log(index)
    
                prev[index].value = newValue
    
                return prev
            }
        )

        console.log(notebooks)
    }

    // useEffect(()=> console.log(notebooks), [notebooks])


    return (
        <div className="container">

            <input type="text" name="" id="title" placeholder="Title" />

            {
                notebooks.map((notebook, index) => 
                    <Notebook key={index}
                    textValue = {notebook.value}
                    index = {index}
                    handleAddNotebooks = {handleAddNotebooks}
                    handleSaveText = {handleSaveText}
                    handleDeleteNotebooks = {handleDeleteNotebooks}
                    />
                )
            }
        </div>
    )
}