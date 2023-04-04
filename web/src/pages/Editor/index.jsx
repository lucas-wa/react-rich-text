import "./styles.scss";

import { Cells } from "../../components/Cells";
import { Header } from "../../components/Header";

export function Editor() {

    return (
        <div className="Editor">
            <Header/>
            <Cells />
        </div>
    )
}