import { Notebook } from "./notebook";

export function HomeMain() {
    return (
        <main className="w-full flex flex-1 flex-col items-center justify-between p-24">
            <Notebook></Notebook>
        </main>
    )
}