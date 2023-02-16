import "./styles.scss"

export function MenuTypes({ index, setTypesMenu, setModalState, setCells }) {


    function handleTurnCell(className) {
        const cellContent = document.querySelector(`.cell${index} .content`)

        cellContent.classList.remove(...cellContent.classList)
        cellContent.classList.add("content", className)

        setCells(prevState => {
            const prev = [...prevState]
            
            prev[index].type = className

            return prev
            
        })

    }


    return (
        <div className="ModalTypesContainer " onMouseLeave={() => setTypesMenu(false)}>

            <ul onMouseDown={()=> setModalState(false)}>
                <li onMouseDown={() => {
                    handleTurnCell("text")
                }}>
                    <p>TXT Texto</p>
                </li>

                <li onMouseDown={() => {
                    handleTurnCell("heading2")
                }}>
                    <p>H2 Subtítulo</p>
                </li>
            </ul>

        </div>
    )
}