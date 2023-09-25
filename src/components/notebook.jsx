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

    function addCell(idx) {

        cellsContents.current.splice(idx + 1, 0, "");

        console.log(cellsContents.current)


        setCells(prevState => {

            const prev = [...prevState];

            const newElement =
            {
                key: shortid.generate(),
                type: "text",
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

    const cellsHandlers = { addCell, deleteCell, duplicateCell, saveContent };

    return (
        <div className="w-full px-56">
            {
                cells.map(({ key, type, color, background, language }, idx) =>
                    <Cell
                        key={key}
                        cellsHandlers={cellsHandlers}
                        idx={idx}
                        content={cellsContents.current[idx]}
                    ></Cell>
                )
            }
        </div>
    )
}