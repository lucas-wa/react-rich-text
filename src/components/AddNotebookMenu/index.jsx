import "./styles.scss"

export function AddNotebookMenu({
    setNotebooks,
    index,
    setModalState   
}){

    function handleAddNotebooks(index, type) {
        setNotebooks(
            prevState => {
                const prev = [...prevState]
                
                prev.splice(index + 1, 0, { type: type, value: "" })
                
                return prev
            }
            )
    }

    return (
        <div className="AddNotebookMenuContainer">
            <ul onMouseDown={()=> setModalState(false)}>
                <li onMouseDown={() => {
                    handleAddNotebooks(index, "text")
                    setModalState(false)
                }}>
                    <p>TXT Texto</p>
                </li>

                <li onMouseDown={() => {
                    handleAddNotebooks(index, "heading2")
                    setModalState(false)

                }}>
                    <p>H2 Subtítulo</p>
                </li>
            </ul>
        </div>
    )
}