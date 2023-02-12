import { useEffect } from "react";
import { useRef } from "react"
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

    useEffect(() => {

        // const selection = document
        // .getSelection()

        // const range = selection.getRangeAt(0)

        // // range.setStart(selection.anchorNode, selection.anchorOffset)
        // // range.setEnd(selection.focusNode, selection.focusOffset)

        // const cloneRange = range.cloneContents()

        // const span = document.createElement("span")

        // // span.classList.add("line_text_selected")

        // range.surroundContents(span)
        // console.log(document.querySelector(`.notebook${index} .content`).innerHTML)
        // // console.log(span)
        // handleSaveText(index, document.querySelector(`.notebook${index} .content`).innerHTML)


    }, []);

    return (
        <div className="SelectorMenuContainer"
            onMouseDown={e => e.preventDefault()}
        >

            <ul>

                <li
                    onMouseDown={e => {
                        e.preventDefault()

                        document.execCommand("bold")

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



                        // const div = document.querySelector(`.notebook${index} .content`).innerHTML;



                        // handleSaveText(index, div)

                    }}
                >
                    <BiBold />
                </li>

                <li
                    onMouseDown={e => {
                        e.preventDefault()
                        document.execCommand("italic")
                    }}
                >
                    <BiItalic />
                </li>

                <li
                    onClick={e => {
                        e.preventDefault();
                        document.execCommand("underline")
                    }}
                >
                    <MdOutlineFormatColorText />
                </li>

                <li onClick={e => {
                    e.preventDefault();
                    document.getSelection().deleteFromDocument()
                    const div = document.querySelector(`.notebook${index} .content`).innerHTML;
                    handleSaveText(index, div)
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