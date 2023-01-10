import "./styles.css";

import { Notebook } from "../../components/Notebook"
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "../../components/Modal";

export function Editor() {
    const [notebooks, setNotebooks] = useState(
        [
            { type: "text", value: "" }
        ]);

    const [indexEdited, setIndexEdited] = useState(0)
    const [modalState, setModalState] = useState(false)

    
    function handleSaveText(index, newValue) {

        setNotebooks(
            prevState => {
                const prev = [...prevState]
                // console.log(newValue)
                prev[index].value = newValue

                return prev
            }
        )

    }




    return (
        <div className="container">

            {
                modalState

                &&

                <Modal
                    index={indexEdited}
                    setModalState={setModalState}
                    setNotebooks={setNotebooks}
                />
            }


            <input type="text" name="" id="title" placeholder="Title" />

            {
                notebooks.map((notebook, index) =>
                    <Notebook key={index}
                        textValue={notebook.value}
                        index={index}
                        handleSaveText={handleSaveText}
                        setIndexEdited={setIndexEdited}
                        setModalState={setModalState}
                        setNotebooks={setNotebooks}
                        type={notebook.type}
                    />
                )
            }
        </div>
    )
}