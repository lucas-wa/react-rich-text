import { ArrowDownRightSquareIcon, CaseLower, CaseUpper, Copy, Image, LayoutGrid, Paintbrush, Pen, Text, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function ActionsMenu({ iconAppear, cellsHandlers, idx }) {

    const { deleteCell, duplicateCell, changeTextColor, changeBackgroundColor, changeCellType } = cellsHandlers;

    const colors = [
        ["inherint", "Padrão", "text-inherit"],
        ["red", "Vermelho", "text-red-500"],
        ["blue", "Azul", "text-blue-500"],
        ["pink", "Rosa", "text-pink-500"],
        ["green", "Verde", "text-green-500"],
        ["purple", "Roxo", "text-purple-500"]
    ];

    const cellTypes = [
        {
            type: "subtitle",
            text: "Subtítulo",
            icon: <CaseUpper />,
        },
        {
            type: "text",
            text: "Texto",
            icon: <CaseLower />,
        }
    ];

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="w-10 aspect-square h-full">
                <LayoutGrid className={`w-full mr-1 md:w-6 mt-2.5 ${iconAppear ? "md:opacity-100" : "md:opacity-0"} transition-all cursor-pointer hover:bg-slate-800 rounded outline-none`}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => deleteCell(idx)}>
                    <Trash className="w-6" />
                    Deletar
                </DropdownMenuItem>
                <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => duplicateCell(idx)}>
                    <Copy className="w-6" />
                    Duplicar
                </DropdownMenuItem>

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex gap-2 cursor-pointer">
                        <ArrowDownRightSquareIcon className="w-6" />
                        Tornar um
                    </DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>

                            {
                                cellTypes.map(({type, icon, text}) =>

                                    <DropdownMenuItem className={`flex gap-2 cursor-pointer justify-start items-center`}
                                    onClick={() => changeCellType(idx, type)}>
                                        {icon}
                                        {text}
                                    </DropdownMenuItem>

                                )
                            }
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>

                </DropdownMenuSub>

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="flex gap-2 cursor-pointer">
                        <Paintbrush className="w-6" />
                        Cores
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent className="max-h-56 overflow-auto">
                            <DropdownMenuLabel>Texto</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {
                                colors.map(([color, text, text_color], key) =>

                                    <DropdownMenuItem key={key} className={`flex gap-2 cursor-pointer ${text_color}`} onClickCapture={e => changeTextColor(idx, color)} >
                                        <Pen className="w-6" />
                                        {text}
                                    </DropdownMenuItem>

                                )
                            }
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Fundo</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {
                                colors.map(([color, text, text_color], key) =>

                                    <DropdownMenuItem key={key} className={`flex gap-2 cursor-pointer ${text_color}`} onClickCapture={e => changeBackgroundColor(idx, color)} >
                                        <Image className="w-6" />
                                        {text}
                                    </DropdownMenuItem>

                                )
                            }
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

