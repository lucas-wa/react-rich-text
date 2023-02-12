import shortid from "shortid"
import "./styles.scss"

export function AddNotebookMenu({
    setNotebooks,
    index,
    setModalState,
    setTexts
}) {

    function handleAddNotebooks(index, type) {

        setTexts(prevState => {
            let prev = [...prevState];

            prev.splice(index + 1, 0, "")

            return prev
        });

        setNotebooks(
            prevState => {
                const prev = [...prevState]

                const newElement =
                {
                    key: shortid.generate(),
                    type,
                    color: "inherint",
                    background: "inherint",
                }

                prev.splice(index + 1, 0, newElement)

                return prev
            }
        )

     
    }

    return (
        <div className="AddNotebookMenuContainer">
            <ul>
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