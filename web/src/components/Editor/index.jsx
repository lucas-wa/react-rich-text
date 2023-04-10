import { useState } from "react";
import shortid from "shortid";
import { Modal } from "../Modal";
import { Cell } from "../Cell";
import "./styles.scss"

export function Editor() {
    const [cells, setCells] = useState(
        [
            {
                key: shortid.generate(),
                type: "text",
                color: "inherint",
                background: "inherint",
                language: "JavaScript"
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
                    setCells={setCells}
                    modalRequest={modalRequest}
                    setTexts={setTexts}
                />
            }

            <div className="container">



                <input type="text" name="" id="title" placeholder="Title" />


                {
                    cells.map((cell, index) => {

                        return (<Cell key={cell.key}
                            type={cell.type}
                            language={cell.language}
                            index={index}
                            color={cell.color}
                            background={cell.background}
                            textValue={texts[index]}
                            setTexts={setTexts}

                            setCells={setCells}
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