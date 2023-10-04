'use client'

import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { ActionsMenu } from "./actions-menu";
import { AddMenu } from "./add-menu";

export function Cell({ idx, cellsHandlers, content, color, background, type }) {


    const [iconAppear, setIconAppear] = useState(false);
    const text = useRef('');
    const { addCell, saveContent } = cellsHandlers;

    const backgroundColors = {
        inherint: "bg-inherint hover:bg-slate-800 focus:bg-slate-800",
        red: "bg-red-500/50 hover:bg-red-600/50 focus:bg-red-600/50",
        blue: "bg-blue-500/50 hover:bg-blue-600/50 focus:bg-blue-600/50",
        pink: "bg-pink-500/50 hover:bg-pink-600/50 focus:bg-pink-600/50",
        green: "bg-green-500/50 hover:bg-green-600/50 focus:bg-green-600/50",
        purple: "bg-purple-500/50 hover:bg-purple-600/50 focus:bg-purple-600/50",
    }

    const cellTypes = {
        text: "",
        subtitle: "text-2xl",
    }

    return (

        <div className="w-full flex md:gap-5 justify-between px-5 md:px-0" onMouseEnter={() => setIconAppear(true)} onMouseLeave={() => setIconAppear(false)}>
            
            <AddMenu
                iconAppear={iconAppear}
                cellsHandlers={cellsHandlers}
                idx={idx}>
            </AddMenu>


            <ActionsMenu
                iconAppear={iconAppear}
                cellsHandlers={cellsHandlers}
                idx={idx}
            ></ActionsMenu>


            <ContentEditable
                placeholder="Digite algo"
                className={`
                resize-none
                ${color == "inherit" ? "text-inherit" : "text-" + color + "-500"} 
                empty:text-${color == "inherit" ? "inherit" : color + "-500"}/50
                max-w-[270px]
                md:max-w-4xl 
                w-full
                outline-none p-2.5 rounded-none
                break-before-auto
                ${backgroundColors[background]}
                ${cellTypes[type]}                  
                transition-colors empty:before:content-[attr(placeholder)] cursor-text break-words`}
                html={text.current || content}
                onChange={e => {
                    text.current = e.target.value;
                    saveContent(idx, e.target.value);
                }}
            />
        </div>

    )
}