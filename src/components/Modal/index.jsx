import { useState } from "react"
import "./styles.css"

export function Modal({index}){

    const [top, setTop] = useState(0);



    return (

        <div className="modal-wrapper sr-only"
        
        
       

        onMouseDown={(e) => {


            if(e.target.classList.contains("modal-wrapper")){
                document.querySelector(".modal-wrapper").classList.add("sr-only")
            }

        }}>

            <div className="modal" >

            </div>

        </div>
    )
}