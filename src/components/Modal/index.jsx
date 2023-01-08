import { useState } from "react"
import { BsFillTrashFill } from "react-icons/bs";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsArrowReturnRight } from "react-icons/bs";
import "./styles.css"

export function Modal({index, handleDeleteNotebooks, handleDuplicateNotebook}){


    return (

        <div className="modal-wrapper sr-only"
        
        
       

        onMouseDown={(e) => {


            if(e.target.classList.contains("modal-wrapper")){
                document.querySelector(".modal-wrapper").classList.add("sr-only")
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

                    <li onMouseDown={e =>{
                        document.querySelector(".modal-wrapper").classList.add("sr-only")
                    }}
                    >
                        <BsArrowReturnRight/>
                        <p>Tornar um</p>
                    </li>
                </ul>

            </div>

        </div>
    )
}