import { useState } from "react";
import shortid from "shortid";
import { Modal } from "../Modal";
import { Notebook } from "../Notebook";
import "./styles.scss"

export function Cells() {
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

    
    const [modalState, setModalState] = useState(false)
    const [modalRequest, setModalRequest] = useState("")
    const [indexEdited, setIndexEdited] = useState("")


    function handleSaveText(index, newValue) {
        setTexts(prevState => {
            let prev = [...prevState];

            prev[index] = newValue;

            return prev;
        });
    }

    return (

        <>

            {
                modalState &&
                <Modal
                    index={indexEdited}
                    setModalState={setModalState}
                    setNotebooks={setNotebooks}
                    modalRequest={modalRequest}
                    setTexts={setTexts}
                />
            }

            <div className="container">



                <input type="text" name="" id="title" placeholder="Title" />


                {
                    notebooks.map((notebook, index) => {

                        // console.log("Renderizou")

                        return (<Notebook key={notebook.key}
                            type={notebook.type}
                            index={index}
                            color={notebook.color}
                            background={notebook.background}
                            textValue={texts[index]}
                            setTexts={setTexts}

                            setNotebooks={setNotebooks}
                            handleSaveText={handleSaveText}
                            setIndexEdited={setIndexEdited}
                            setModalRequest={setModalRequest}
                            setModalState={setModalState}
                        />)
                    }
                    )
                }

            </div>

        </>
    )
}