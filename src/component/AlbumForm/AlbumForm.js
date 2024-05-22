import styles from "./AlbumForm.module.css"
import { useEffect, useRef } from "react";
const AlbumForm=({addAlbum})=>{
    const createAlbumText = useRef()

        const createAlbumHandler = ()=>{
            const album ={
                name : createAlbumText.current.value,
                images:[],
               // id : new Date().getTime()
            }
            addAlbum(album)
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
export  default  AlbumForm;