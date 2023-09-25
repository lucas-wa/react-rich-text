import { ArrowDownRightSquareIcon, Copy, LayoutGrid, Paintbrush, Pen, Text, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function ActionsMenu({ iconAppear, cellsHandlers, idx }) {

    const {deleteCell, duplicateCell} = cellsHandlers;

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className={`mt-2.5 ${iconAppear ? "opacity-100" : "opacity-0"} transition-all cursor-pointer hover:bg-slate-800 rounded h-fit`}>
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
                        <DropdownMenuSubContent>
                            <DropdownMenuItem className="flex gap-2 cursor-pointer">
                                <Pen className="w-6" />
                                Vermelho
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 cursor-pointer">
                                <Pen className="w-6" />
                                Azul
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 cursor-pointer">
                                <Pen className="w-6" />
                                Rosa
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2 cursor-pointer">
                                <Pen className="w-6" />
                                Verde
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

