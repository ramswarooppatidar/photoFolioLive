import styles from "./AlbumForm.module.css"
import { useEffect, useRef } from "react";

//fire base
import { db } from "../../firebaseinit";
import {doc, collection, getDocs, addDoc } from "firebase/firestore/lite"

//redux implement
import { useDispatch } from "react-redux";
import { createAlbum } from "../../Redux/Action/albumFormAction";

// const AlbumForm=({addAlbum})=>{
const AlbumFormRedux=()=>{
    const createAlbumText = useRef()
        const dispatch = useDispatch();
        const createAlbumHandler = async ()=>{
            const album ={
                name : createAlbumText.current.value,
                images:[],
               // id : new Date().getTime()
            }
            await addDoc(collection(db, "albums"),{
                text: album.name,
                images: []
        })
            dispatch(createAlbum(album))
            clearInput()
        }

        const clearInput = () => {
            console.log("createAlbumText.current.value:", createAlbumText.current.value)
            createAlbumText.current.value = "";
        }
   
    return(
        <>
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <h1>Create an Album</h1>
                <input type="text" 
                    placeholder="Album name"
                    ref={createAlbumText}
                />
                <button onClick={() => clearInput()}>Clear</button>
                <button onClick={()=>createAlbumHandler()}>Create</button>
            </div>
        </div>
        </>
    )
}
export  default  AlbumFormRedux;