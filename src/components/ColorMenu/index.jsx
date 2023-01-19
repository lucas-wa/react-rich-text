import './styles.scss'
import { MdOutlineFormatColorText } from "react-icons/md"
import { BsFillGrid1X2Fill } from "react-icons/bs"

export function ColorMenu({ index, setTypesMenu, setModalState, setNotebooks }) {

    function changeNotebookColor(color) {
        const notebookContent = document.querySelector(`.notebook${index} .content`)

        notebookContent.style.color = color.toString()

        setNotebooks(prevState => {
            let prev = [...prevState]

            prev[index].color = color

            return prev;
        })

    }

    function changeNotebookBackground(color){
        const notebookContent = document.querySelector(`.notebook${index} .content`)
        color = color
        .replace("rgb", "rgba")
        .replace(")", ", .3)")

        notebookContent.style.backgroundColor = (color.toString())

        setNotebooks(prevState => {
            let prev = [...prevState]

            prev[index].background = color

            return prev;
        })
    }

    return (
        <div className="ColorMenuContainer" >
            <ul
                onMouseDown={e => {

                    let color;

                    if (e.target.style.color) {
                        color = e.target.style.color
                    } else {
                        color = e.target.parentNode.style.color
                    }

                    changeNotebookColor(color)
                    setModalState(false)
                }}
            >
                <p>Texto</p>


                <li style={{ color: "inherint" }}>
                    <MdOutlineFormatColorText />
                    <p>Padrão</p>
                </li>

                <li style={{ color: "#C0C0C0" }}>
                    <MdOutlineFormatColorText />
                    <p>Cinza</p>
                </li>

                <li style={{ color: "#6495ED" }}>
                    <MdOutlineFormatColorText />
                    <p>Azul</p>
                </li>

                <li style={{ color: "#CD5C5C" }}>
                    <MdOutlineFormatColorText />
                    <p>Vermelho</p>
                </li>

                <li style={{ color: "#90EE90" }}>
                    <MdOutlineFormatColorText />
                    <p>Verde</p>
                </li>

                <li style={{ color: "#CD853F" }}>
                    <MdOutlineFormatColorText />
                    <p>Laranja</p>
                </li>

                <li style={{ color: "#DA70D6" }}>
                    <MdOutlineFormatColorText />
                    <p>Rosa</p>
                </li>


            </ul>

            <ul
                onMouseDown={e => {

                    let color;

                    if (e.target.style.color) {
                        color = e.target.style.color
                    } else {
                        color = e.target.parentNode.style.color
                    }
                    changeNotebookBackground(color)
                    setModalState(false)
                }}

            >
                <p>Cor de fundo</p>

                <li style={{ color: "inherint" }}>
                    <BsFillGrid1X2Fill />
                    <p>Padrão</p>
                </li>

                <li style={{ color: "#C0C0C0" }}>
                    <BsFillGrid1X2Fill />
                    <p>Cinza</p>
                </li>

                
                <li style={{ color: "#6495ED" }}>
                    <BsFillGrid1X2Fill />
                    <p>Azul</p>
                </li>

                <li style={{ color: "#CD5C5C" }}>
                    <BsFillGrid1X2Fill />
                    <p>Vermelho</p>
                </li>

                <li style={{ color: "#90EE90" }}>
                    <BsFillGrid1X2Fill />
                    <p>Verde</p>
                </li>

                <li style={{ color: "#CD853F" }}>
                    <BsFillGrid1X2Fill />
                    <p>Laranja</p>
                </li>

                <li style={{ color: "#DA70D6" }}>
                    <BsFillGrid1X2Fill />
                    <p>Rosa</p>
                </li>


            </ul>
        </div>
    )
}