import { ArrowDownRightSquareIcon, Copy, Image, LayoutGrid, Paintbrush, Pen, Text, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function ActionsMenu({ iconAppear, cellsHandlers, idx }) {

    const { deleteCell, duplicateCell, changeTextColor, changeBackgroundColor } = cellsHandlers;

    const colors = [
        ["red", "Vermelho", "text-red-500"],
        ["blue", "Azul", "text-blue-500"],
        ["pink", "Rosa", "text-pink-500"],
        ["green", "Verde", "text-green-500"],
        ["purple", "Roxo", "text-purple-500"]
    ];

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className={`mt-2.5 ${iconAppear ? "opacity-100" : "opacity-0"} transition-all cursor-pointer hover:bg-slate-800 rounded h-fit outline-none`}>
                <LayoutGrid />
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
                <DropdownMenuItem className="flex gap-2 cursor-pointer">
                    <ArrowDownRightSquareIcon className="w-6" />
                    Tornar um
                </DropdownMenuItem>
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

