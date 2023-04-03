import './styles.scss'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';

import { BsFillCaretDownFill } from "react-icons/bs"


export function CodeCell({ textValue,
    index,
    handleSaveText,
    setModalState,
    setModalRequest,
    setIndexEdited,
    language
 }) {


    function handleLanguage(lang) {
        setLanguage(lang)
    }

    return (
        <div className='codeCellContainer'>

            <CodeEditor
                className={`codeBlock`}
                value={textValue}
                language={language}
                placeholder="Escreva algo"
                onChange={e => handleSaveText(index, e.target.value)}
                padding={10}
                style={{
                    fontFamily: 'Poppins, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
                    width: "100%",
                    zIndex: 0,
                    backgroundColor: "#191919"
                }}
            />

            <div className="languageSelector"
                onMouseDown={() => {
                    setIndexEdited(index)
                    setModalRequest("LanguagesMenu");
                    setModalState(true)
                }}
            >
                <span>
                    {language}
                </span>
                <BsFillCaretDownFill />
            </div>

        </div>

    )
}