import { Plus, ArrowDownRightSquareIcon, CaseLower, CaseUpper, Copy, Image, LayoutGrid, Paintbrush, Pen, Text, Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function AddMenu({ iconAppear, cellsHandlers, idx }) {

    const { addCell } = cellsHandlers;

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
            <DropdownMenuTrigger className="w-10 aspect-square h-full outline-none">
                <Plus className={`min-w-full mr-1 md:w-6 mt-2.5 ${iconAppear ? "md:opacity-100" : "md:opacity-0"} transition-all cursor-pointer hover:bg-slate-800 rounded outline-none`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Adcionar</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    cellTypes.map(({ type, icon, text }) =>

                        <DropdownMenuItem className={`flex gap-2 cursor-pointer justify-start items-center`}
                            onClick={() => addCell(idx, type)}>
                            {icon}
                            {text}
                        </DropdownMenuItem>

                    )
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

