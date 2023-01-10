import { useState } from "react"
import { BsFillTrashFill } from "react-icons/bs";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";
import "./styles.css"
import { ModalTypes } from "../ModalTypes";

export function Modal({index, handleDeleteNotebooks, handleDuplicateNotebook}){

    const [typesModal, setTypesModal] = useState(false);

    return (

        <div className="modal-wrapper sr-only"
        
        
       

        onMouseDown={(e) => {


            if(e.target.classList.contains("modal-wrapper")){
                document.querySelector(".modal-wrapper").classList.add("sr-only")
                setTypesModal(false)
            }

        }}>

            <div className="modal" >

                <ul>
                    <li onMouseDown={e => {
                        document.querySelector(".modal-wrapper").classList.add("sr-only")
                        handleDeleteNotebooks(e, index)
                    }}>
                        <BsFillTrashFill/>
                        <p>Deletar</p>
                    </li>

                    <li onMouseDown={e =>{
                        document.querySelector(".modal-wrapper").classList.add("sr-only")
                        handleDuplicateNotebook(index)
                    }}
                    >
                        <HiOutlineDuplicate/>
                        <p>Duplicar</p>
                    </li>

                    <li                    
                    onMouseEnter={e =>{
                        setTypesModal(true)
                    }}

                    onMouseDown={e => {
                        setTypesModal(false)
                    }}
                    >
                        <BsArrowReturnRight/>
                        <p>Tornar um</p>

                    </li>
                </ul>

            </div>

            {typesModal && <ModalTypes typesModal={typesModal} index={index}/>}
            

        </div>
    )
}