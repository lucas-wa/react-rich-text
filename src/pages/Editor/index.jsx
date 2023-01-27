import "./styles.css";
import shortid from "shortid"
import { Notebook } from "../../components/Notebook"
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "../../components/Modal";

export function Editor() {

    
    const [notebooks, setNotebooks] = useState(
        [
            {
                key: shortid.generate(),
                type: "text",
                color: "inherint",
                background: "inherint"
            }
        ]);

    const [texts, setTexts] = useState([""]);

    const [indexEdited, setIndexEdited] = useState(0)
    const [modalState, setModalState] = useState(false)
    const [modalRequest, setModalRequest] = useState("")
    const [selectorMenu, setSelectorMenu] = useState(false)


    function handleSaveText(index, newValue) {

        setTexts(prevState => {
            let prev = [...prevState]

            prev[index] = newValue

            return prev
        })

    }




    useEffect(() => console.log(notebooks, texts), [notebooks, texts])

    return (
        <>
            {
                modalState &&
                <Modal
                    index={indexEdited}
                    setModalState={setModalState}
                    setNotebooks={setNotebooks}
                    modalRequest={modalRequest}
                    selectorMenu={selectorMenu}
                    setTexts={setTexts}
                />}
            <div className="container">

                <input type="text" name="" id="title" placeholder="Title" />


                {
                notebooks.map((notebook, index) => {

                    return (<Notebook key={notebook.key}
                        type={notebook.type}
                        textValue={texts[index]}
                        index={index}
                        color={notebook.color}
                        background={notebook.background}


                        handleSaveText={handleSaveText}
                        setSelectorMenu={setSelectorMenu}
                        setIndexEdited={setIndexEdited}
                        setModalState={setModalState}
                        setModalRequest={setModalRequest}
                        modalState={modalState}
                    />)
                }
                )
            }

            </div>
        </>
    )
}