import styles from "./ImageForm.module.css"
import { useRef, useState, useEffect } from "react"
const ImageForm=({album, updateAlbumImagesArray})=>{
    const [updateAlbum, setUpdateAlbum] = useState(album)
    const imageTitleInputRef = useRef();
    const imageUrlInputRef = useRef();
   
    //I tried to directly update propse it is not possible so, create new hook inside it
    // use that hook we need to update
    const addImageFormHandler = ()=>{
        const newImage ={
            title : imageTitleInputRef.current.value,
            imageUrl : imageUrlInputRef.current.value
        }
        //error not itrable
        // const updateImage = [...updateAlbum.images,newImage]
        // const updateAlbumCopy = [{...updateAlbum, images: updateImage}]
       // setUpdateAlbum(updateAlbumCopy)

       //coreect way to update
        setUpdateAlbum(prevAlbum => ({
            ...prevAlbum,
            images: [...prevAlbum.images, newImage]
        }));
       

        // console.log("updateAlbum", updateAlbum)
        // updateAlbumImagesArray(updateAlbum)
    }
    useEffect(() => {
        updateAlbumImagesArray(updateAlbum)
        console.log("updateAlbum", updateAlbum);
    }, [updateAlbum]);
    
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
export default ImageForm;