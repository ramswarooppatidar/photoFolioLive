import styles from "./ImageForm.module.css"
import { useRef, useState, useEffect } from "react"

//redux implemented
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import { imageFormCombReducer } from "../../Redux/Reducer/imageFormReducer";
// import { saveImages, updateImageHere, resetUpdateImage } from "../../Redux/Action/imageFormAction";
import { saveImage, updateImageHere, resetUpdateImage } from "../../Redux/Action/imageListAction";



    const ImageFormRedux=()=>{
    const imageTitleInputRef = useRef();
    const imageUrlInputRef = useRef();

    //redux implementd
    const {updateImage} = useSelector((state)=>state.imageListCombReducer.updateImages )
    const {album} = useSelector((state)=> state.albumListCombReducer.album)
    const dispatch = useDispatch();

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
           // saveImages(newImage)
           dispatch(saveImage(newImage))
            imageTitleInputRef.current.focus();
            return;
       }

    //    imageTitleInputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
       const newImage ={
        title : titleInput,
        imageUrl : imageUrlInput,
        id : updateImage.id
     }
    //  updateImageHere(newImage)
    dispatch(updateImageHere(newImage))
    // resetUpdateImage();
    dispatch(resetUpdateImage())
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
            <div className={styles.buttonContainer}>
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
export default ImageFormRedux;