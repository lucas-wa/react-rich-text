import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full h-fit p-10 flex justify-start items-center text-xl">

            <p className="flex gap-2 items-center">
                    Developed by
                <Link href={"https://github.com/lucas-wa"} target="_blank" className="text-xl flex gap-1 items-end text-purple-500 leading-none">
                    <Github />
                    lucas-wa
                </Link>
            </p>

        </footer>
    )
}