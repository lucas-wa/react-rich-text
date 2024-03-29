'use client'

import { useRef, useState } from "react";
import shortid from "shortid";
import { Cell } from "./cell";

export function Notebook() {

    const [cells, setCells] = useState(
        [
            {
                key: shortid.generate(),
                type: "text",
                color: "inherint",
                background: "inherint",
                language: "JavaScript",
                content: ""
            }
        ]
    );

    const cellsContents = useRef([""]);

    function addCell(idx, type) {

        cellsContents.current.splice(idx + 1, 0, "");

        console.log(cellsContents.current)


        setCells(prevState => {

            const prev = [...prevState];

            const newElement =
            {
                key: shortid.generate(),
                type,
                color: "inherint",
                background: "inherint",
                language: "JavaScript",
                content: ""

            }

            prev.splice(idx + 1, 0, newElement);

            return prev
        })


    }

    function deleteCell(idx) {

        cellsContents.current.splice(idx, 1);
        if (cellsContents.current.length < 1) cellsContents.current.push("")
        console.log(cellsContents.current)


        setCells(prevState => {

            const prev = [...prevState];

            prev.splice(idx, 1);

            if (prev.length < 1) prev.push(
                {
                    key: shortid.generate(),
                    type: "text",
                    color: "inherint",
                    background: "inherint",
                    language: "JavaScript",
                    content: ""
                }
            )

            return prev
        })
    }

    function duplicateCell(idx) {

        const newContent = cellsContents.current[idx];

        cellsContents.current.splice(idx + 1, 0, newContent);

        console.log(cellsContents.current)



        setCells(prevState => {

            const prev = [...prevState];

            console.log(prev)

            const {
                key,
                type,
                color,
                background,
                language,
                content
            } = prev[idx];

            const newElement = {
                key: shortid.generate(),
                type,
                color,
                background,
                language,
                content
            }



            prev.splice(idx + 1, 0, newElement);
            console.log(prev)


            return prev
        })


    }

    function saveContent(idx, content) {
        cellsContents.current[idx] = content;
    }

    function changeTextColor(idx, color) {
        setCells(prevState => {

            const prev = [...prevState];

            prev[idx].color = color;

            return prev
        })
    }

    function changeBackgroundColor(idx, background) { 
        setCells(prevState => {

            const prev = [...prevState];

            prev[idx].background = background;

            return prev
        });

        console.log(cells)
    }

    function changeCellType(idx, type){

        setCells(prevState => {

            const prev = [...prevState];

            prev[idx].type = type;

            return prev;

        });

    }

    const cellsHandlers = { addCell, deleteCell, duplicateCell, saveContent, changeTextColor, changeBackgroundColor, changeCellType };

    return (
        <div className="w-11/12 max-w-5xl px-5 md:px-0 py-12 md:py-24 flex flex-col gap-2">
            {
                cells.map(({ key, type, color, background, language }, idx) =>
                    <Cell
                        key={key}
                        cellsHandlers={cellsHandlers}
                        idx={idx}
                        content={cellsContents.current[idx]}
                        color={color}
                        background={background}
                        type={type}
                    ></Cell>
                )
            }
        </div>
    )
}