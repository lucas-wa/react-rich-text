import { BsFillGrid1X2Fill, BsFillTrashFill } from "react-icons/bs"
import { BiBold, BiItalic } from "react-icons/bi"
import { MdOutlineFormatColorText } from "react-icons/md"
import "./styles.scss"

export function SelectorMenu({
    index,
    setModalState,
    setTexts
}) {


    function handleSaveText(index, newValue) {

        setTexts(prevState => {
            let prev = [...prevState]

            prev[index] = newValue

            return prev
        })

    }


    return (
        <div className="SelectorMenuContainer"
            onMouseDown={e => e.preventDefault()}
        >

            <ul>

                <li
                    onMouseDown={e => {
                        e.preventDefault();

                        document.execCommand("bold");

                        setModalState(false);

                        /* Trying to find a pollyfill for .execCommand() */

                        // const selection = document.getSelection();

                        // const range = selection.getRangeAt(0);

                        // // console.log(range.commonAncestorContainer.parentElement.tagName)

                        // const parentNode = range.commonAncestorContainer.parentElement.tagName

                        // if(parentNode !== "B"){

                        //     const b = document.createElement("b");

                        //     range.surroundContents(b);

                        //     selection.removeAllRanges();

                        // } else {

                        //     const textSelected = selection.toString();

                        //     selection.deleteFromDocument();

                        // }



                        // const div = document.querySelector(`.cell${index} .content`).innerHTML;



                        // handleSaveText(index, div)

                    }}
                >
                    <BiBold />
                </li>

                <li
                    onMouseDown={e => {
                        e.preventDefault()
                        document.execCommand("italic");
                        setModalState(false);

                    }}
                >
                    <BiItalic />
                </li>

                <li
                    onClick={e => {
                        e.preventDefault();
                        document.execCommand("underline");
                        setModalState(false);

                    }}
                >
                    <MdOutlineFormatColorText />
                </li>

                <li onClick={e => {
                    e.preventDefault();
                    document.getSelection().deleteFromDocument()
                    const div = document.querySelector(`.cell${index} .content`).innerHTML;
                    handleSaveText(index, div);
                    setModalState(false);
                }}>
                    <BsFillTrashFill />
                </li>

                {/* <li>
                    <BsFillGrid1X2Fill />
                </li> */}

            </ul>


        </div>
    )
}