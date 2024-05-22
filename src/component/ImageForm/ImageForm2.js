import styles from "./ImageForm.module.css"
import { useRef, useState, useEffect } from "react"
const ImageForm2=({album,
                saveImages, 
                updateImage,
                 updateImageHere,
                resetUpdateImage
                })=>{
    const imageTitleInputRef = useRef();
    const imageUrlInputRef = useRef();
    useEffect(() => {
        if (updateImage) {
            console.log("update image ", updateImage);
            imageTitleInputRef.current.value = updateImage.title;
            imageUrlInputRef.current.value = updateImage.imageUrl;
            imageUrlInputRef.current.focus();
        }
    }, [updateImage]);

    const addImageFormHandler = ()=>{
       const  titleInput = imageTitleInputRef.current.value
        const imageUrlInput = imageUrlInputRef.current.value
       if(!updateImage){
            const newImage ={
                title : titleInput,
                imageUrl : imageUrlInput,
                id : new Date().getTime()
            }
            clearInput();
            saveImages(newImage)
            imageTitleInputRef.current.focus();
            return;
       }

    //    imageTitleInputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
       const newImage ={
        title : titleInput,
        imageUrl : imageUrlInput,
        id : updateImage.id
     }
     updateImageHere(newImage)
     resetUpdateImage();
     clearInput();
       
        
    }
    
    const clearInput=()=>{
        imageTitleInputRef.current.value="";
        imageUrlInputRef.current.value="";
    }
    
    
    return(
        <>
        <div className={styles.imageFormContainer}>
            <h1>Add image to {album.text}</h1>
            <div>
                <input className={styles.inputField}
                type="text"
                placeholder="Title"
                ref ={imageTitleInputRef}
                />
            </div>
            <div>
                <input className={styles.inputField}
                type="text"
                placeholder="image url, facbook image url , drive ...."
                ref ={imageUrlInputRef}
                />
            </div>
            <div>
                <button>
                    clear
                </button>
                <button onClick={() => {addImageFormHandler()}}>
                    add
                </button>
            </div>
        </div>

        </>
    )
}
export default ImageForm2;