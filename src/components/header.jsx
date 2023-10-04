'use client'

import { ArrowRightSquare, LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function Header() {
    return (
        <header className='w-full backdrop-blur p-10 flex items-center justify-between'>
            <h1 className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text animate-gradient bg-300%'>
                Eclipses
            </h1>

            <nav>

                <DropdownMenu className="w-full">
                    <DropdownMenuTrigger className="w-full outline-none flex justify-center items-center">
                        <div className="w-10 aspect-square flex flex-col gap-2">
                            <span className="w-full h-px bg-white rounded"></span>
                            <span className="w-full h-px bg-white rounded"></span>
                            <span className="w-full h-px bg-white rounded"></span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-10">
                        <DropdownMenuItem>
                            <Link href={"/login"} className="flex items-center justify-center">
                                <LogIn className='mr-2' />
                                Entrar
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/signup"} className="flex items-center justify-center">
                                <ArrowRightSquare className='mr-2' />
                                Cadastrar
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </header>
    )
}