import "./styles.css";
import { VscAdd } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg"
import { useRef } from "react";
import ContentEditable from "react-contenteditable";


import CodeEditor from '@uiw/react-textarea-code-editor';
import { CodeCell } from "../CodeCell";

export function Cell({
    setIndexEdited,
    setModalRequest,
    setModalState,
    textValue,
    index,
    handleSaveText,
    background,
    color,
    type,
    language
 }) {



    const divRef = useRef(null);


    const [iconState, setIconState] = useState(false);




    return (

        <>


            <div className={`cell cell${index}`}
                onMouseOver={() => {
                    setIconState(true)
                }}

                onMouseLeave={() => {
                    setIconState(false)
                }}
            >

                <VscAdd
                    className={`icons` + ` ${iconState ? 'appear' : 'hide'}`}
                    onMouseDown={() => {
                        setModalRequest("AddNotebook")
                        setIndexEdited(index)
                        setModalState(true)
                    }}
                />



                <CgMenuGridO
                    className={`icons` + ` ${iconState ? 'appear' : 'hide'}`}
                    onMouseDown={(e) => {
                        setModalRequest("EditNotebook")
                        setIndexEdited(index)
                        setModalState(true)
                    }}

                />

                {(type !== "codeBlock") ?

                    <ContentEditable
                        innerRef={divRef}
                        className={`content ${type}`}
                        html={textValue}
                        placeholder={"Escreva algo"}
                        onChange={() => handleSaveText(index, divRef.current.innerHTML)}
                        onSelect={e => {
                            if (document.getSelection().toString().length > 0) {
                                setIndexEdited(index)
                                setModalRequest("SelectorMenu")
                                setModalState(true)
                            }
                        }}
                        style={{
                            color,
                            background
                        }}
                    />
                    :
                    <CodeCell
                        textValue={textValue}
                        index={index}
                        handleSaveText={handleSaveText}
                        setIndexEdited={setIndexEdited}
                        setModalState={setModalState}
                        setModalRequest={setModalRequest}
                        language={language}
                    />}

            </div>
        </>


    )
}