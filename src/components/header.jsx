import { ArrowRightSquare, LogIn } from "lucide-react";
import Link from "next/link";

export function Header() {
    return (
        <header className='w-full backdrop-blur p-10 flex items-center justify-between'>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text animate-gradient bg-300%'>
                Eclipses
            </h1>

            <nav>
                <ul className='flex gap-5 p-5'>
                    <li>
                        <Link href={"/login"} className="px-5 py-3 rounded ring-2 ring-purple-600 flex items-center justify-center brightness-95 hover:brightness-100 transition-all">
                            <LogIn className='w-5 h-5 mr-2' />
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link href={"/sign"} className="px-5 py-3 rounded bg-purple-600 ring-purple-600 flex items-center justify-center brightness-95 hover:brightness-100 transition-all">
                            <ArrowRightSquare className='w-5 h-5 mr-2' />
                            Cadastrar
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}