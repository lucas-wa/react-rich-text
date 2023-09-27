'use client'

import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { ActionsMenu } from "./actions-menu";

export function Cell({ idx, cellsHandlers, content, color, background }) {


    const [iconAppear, setIconAppear] = useState(false);
    const text = useRef('');
    const {addCell, saveContent} = cellsHandlers;

    return (

        <div className="w-full flex gap-5" onMouseEnter={() => setIconAppear(true)} onMouseLeave={() => setIconAppear(false)}>
            <Plus
                onClick={() => addCell(idx)}
                className={`mt-2.5 ${iconAppear ? "opacity-100" : "opacity-0"} transition-all cursor-pointer hover:bg-slate-800 rounded`} />


            <ActionsMenu
                iconAppear={iconAppear}
                cellsHandlers={cellsHandlers}
                idx={idx}
            ></ActionsMenu>


            <ContentEditable
                placeholder="Digite algo"
                className={`text-${color == "inherit" ? "inherit" : color + "-500"} empty:text-${color == "inherit" ? "inherit" : color + "-500"}/50 w-full outline-none p-2.5 rounded-none bg-${background == "inherit" ? "inherit" : background + "-500"}  hover:bg-${background == "inherit" ? "inherit" : background + "-800"}/20 focus:bg-slate-800 transition-colors empty:before:content-[attr(placeholder)] cursor-text`}
                html={text.current || content}
                onChange={e => { 
                    text.current = e.target.value;
                    saveContent(idx, e.target.value);
                }}
            />
        </div>

    )
}