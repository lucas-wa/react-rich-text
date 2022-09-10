import "./styles.css";
import { VscAdd } from "react-icons/vsc";
import {BsFillTrashFill} from "react-icons/bs"
import { SharedTextArea } from "../../components/SharedTextArea"
import { useState } from "react";

export function Editor() {
    const [notebooks, setNotebooks] = useState([{
        textType: "text",
        value: ""
    }]);

    function handleAddNotebooks(index) {


        setNotebooks(prevState => {
            const previous = [...prevState];

            const deleted = previous.splice(Number(index) + 1, previous.length);


            previous.push({ textType: "added", value: "" });


            return [...previous, ...deleted]

        });
    }

    function handleDeleteNotebooks(index){
        if(notebooks.length > 1){
            setNotebooks(prevState => {
                const previous = [...prevState];

                previous.splice(index, 1);

                return previous
            });
        }
    }

    function handleSaveText(event, index) {
        setNotebooks(prevState => {
            const previous = [...prevState];

            console.log(previous)
            
            previous[index].value = event.target.value;

            return previous;
        }
        )
    }


    return (
        <div className="container">

            <input type="text" name="" id="title" placeholder="Title" />

            {
                notebooks.map((notebook, index) => (
                    <div className="notebook" key={index}>
                        <VscAdd 
                        className="icons" 
                        onMouseDown={
                            () => handleAddNotebooks(index)
                        } 
                        
                        />

                        <SharedTextArea 
                        handleSaveText={
                            event => handleSaveText(event, index)
                        } 
                        value={notebook.value}
                        handleDeleteNotebooks = {
                            () => handleDeleteNotebooks(index)
                        }
                        />

                        <BsFillTrashFill
                        className="icons"
                        onClick={
                            ()=>{handleDeleteNotebooks(index)}
                        }/>
                    </div>
                ))
            }
        </div>
    )
}