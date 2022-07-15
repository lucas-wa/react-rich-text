import "./styles.css";
import { VscAdd } from "react-icons/vsc";
import { SharedTextArea } from "../../components/SharedTextArea"
import { useState } from "react";

export function Editor() {
    const [notebooks, setNotebooks] = useState([{
        textType: "text",
        value: ""
    }]);

    function handleAddNotebooks(index) {

        console.log(index);

        setNotebooks(prevState => {
            const previous = [...prevState];

            const deleted = previous.splice(Number(index) + 1, previous.length);


            previous.push({ textType: "added", value: "" });

            console.log([...previous, ...deleted])

            return [...previous, ...deleted]

        });
    }

    function handleSaveText(event, index) {
        setNotebooks(prevState => {
            const previous = [...prevState];
            
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
                        <VscAdd className="plusIcon" onMouseDown={() => { handleAddNotebooks(index) }} />
                        <SharedTextArea handleSaveText={(event) => handleSaveText(event, index)} value={notebook.value}/>
                    </div>
                ))
            }

            {/* <div className="notebook">
                <VscAdd className="plusIcon" onClick={handleAddNotebooks}/>
                <SharedTextArea/>
            </div> */}

        </div>
    )
}