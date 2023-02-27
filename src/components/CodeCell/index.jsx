import './styles.scss'
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useState } from 'react';

export function CodeCell({ textValue, index, handleSaveText }) {

    const [language, setLanguage] = useState('js');

    function handleLanguage(lang){
        setLanguage(lang)
    }

    return (
        <div className='codeCellContainer'>

            <select className="languageSelector" onChange={e => handleLanguage(e.target.value)}>
                <option value="js">js</option>
                <option value="html">html</option>
                <option value="css">css</option>
            </select>

            <CodeEditor
                className={`codeBlock`}
                value={textValue}
                language={language}
                placeholder="Escreva algo"
                onChange={e => handleSaveText(index, e.target.value)}
                padding={20}
                style={{
                    fontFamily: 'Poppins, ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace',
                    width: "100%",
                    zIndex: 0,
                }}
            />
        </div>

    )
}