import './styles.scss'

export function LanguagesMenu({ index,
    setCells,
    setModalState }) {

    function handeChangeCellLanguage(lang) {
        setCells(prevState => {
            let prev = [...prevState];

            prev[index].language = lang;

            return prev;
        })

        setModalState(false);
    }

    return (
        <div className="LanguagesMenuContainer">
            <ul>
                <li
                    onMouseDown={
                        e => handeChangeCellLanguage(e.target.innerHTML)
                    }
                >
                    JavsScript
                </li>

                <li
                    onMouseDown={
                        e => handeChangeCellLanguage(e.target.innerHTML)
                    }
                >
                    HTML
                </li>

                <li
                    onMouseDown={
                        e => handeChangeCellLanguage(e.target.innerHTML)
                    }
                >
                    CSS
                </li>

                <li
                    onMouseDown={
                        e => handeChangeCellLanguage(e.target.innerHTML)
                    }
                >
                    Python
                </li>

                <li
                    onMouseDown={
                        e => handeChangeCellLanguage(e.target.innerHTML)
                    }
                >
                    Java
                </li>

                <li
                    onMouseDown={
                        e => handeChangeCellLanguage(e.target.innerHTML)
                    }
                >
                    Rust
                </li>
            </ul>
        </div>
    )
}