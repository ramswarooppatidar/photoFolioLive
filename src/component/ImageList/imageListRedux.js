import styles from "./ImageList.module.css"
import { useState, useEffect} from "react"
//normal components
// import ImageForm2 from "../ImageForm/ImageForm2"

//redux components
import ImageFormRedux from "../ImageForm/imageFormRedux"

import { doc} from "firebase/firestore/lite"
import { db } from "../../firebaseinit"
import { updateDoc } from "firebase/firestore/lite"
import { toast } from "react-toastify"

//redux
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { saveImages,
         updateImageHere, 
         updateImageHandler,
         deleteImage ,
         resetUpdateImage  }     from "../../Redux/Action/imageListAction" 

const ImageListRedux=({goBackToAlbumList})=>{

    //redux
    const album = useSelector((state)=> state.appCombReducer.album)
    const dispatch = useDispatch()

    const [isAddImage, setIsAddImage] = useState(false)
    // const [images, setImages] = useState(album.images)
    const [images, setImages] = useState([])
    const [updateImage, setUpdateImage] = useState()

    useEffect(()=>{
        if(album && album.images){
            setImages(album.images)
        }
    })
    const addImageHandler=()=>{
        setIsAddImage(prevState => !prevState)
    }
    const saveImages= async (newImage)=>{

        // setImages(prevImages => {
        //     const updatedImages = [...prevImages, newImage]
            dispatch(saveImages(newImage))

            const docRef = doc(db, "albums", album.id)
            updateDoc(docRef, {
                // images : updatedImages
                images : images
            }).then(()=>{
                toast.success("image add successfully")
            })
            .catch(error => {
                toast.error("failde to add images")
            })

            // return updatedImages
        }
    //}  
      
   const deleteImageHandler= async (id)=>{
        const imagesAfterDelete = images.filter((image) => image.id !== id)

        //fire base 
        const docRef = doc(db, "albums", album.id)
        await updateDoc(docRef, {
            images : imagesAfterDelete
        }).then(()=>{
            toast.success("images deleted successfully")
        })
        .catch(error => {
            toast.error("failed to delete image", error)
        })
        // setImages(imagesAfterDelete);
        dispatch(deleteImage(id))
   }

   const updateImageHandler=(img)=>{
        setIsAddImage(true)
       // setUpdateImage(img)
       dispatch(updateImageHandler(img))
   }
   function resetUpdateImage(){
    //setUpdateImage();
    dispatch(resetUpdateImage())
   }

   const updateImageHere1 =  (updatedImage) => {
    // Find the index of the image to update
    const index = images.findIndex((img) => img.id === updatedImage.id);
    if (index !== -1) {
        // Create a new array with the updated image at the same position
        const updatedImages = [
            ...images.slice(0, index),
            updatedImage,
            ...images.slice(index + 1)
        ];
        // Set the state with the new array of images
        setImages(updatedImages);
    }

    
   const updateImageHere = async (updatedImage) => {
    
        dispatch(updateImageHere(updateImage))

        //fire  base  
         const docRef = doc(db, "albums", album.id)
         await updateDoc(docRef, {
             images : images
         }).then(()=>{
             toast.success("images update successfully")
         })
         .catch(error => {
             toast.error("failed to update image", error)
         })
    }
}

    return(
        <>
        {/* <ImageForm/> */}
        {isAddImage ? <ImageFormRedux/> : null}
        <div className={styles.imageListContainer}>
            <div><img onClick = {()=>{goBackToAlbumList()}}
            src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png" /></div>
            <div><h1>
                {isAddImage && album.images.length > 0  ? `Image in ${album.text}` : `${images}` ? `Image in ${album.text}` : "No images found in the album."}
                </h1>
            </div>
            <div>
                <button 
                    onClick={()=>{addImageHandler()}}
                    className={isAddImage ? styles.cancleButton : styles.addButton}>
                    {isAddImage ? "cancle" : "Add image" }
                </button>
            </div>
        </div>
        <div className={styles.imageListContainer2}>
            {images.map((img, index) => {
                console.log("inside map function")
               return(<div className={styles.outer} key={index}>
                         {/* <img src="https://static.vecteezy.com/system/browse_category/image/45/large_People_cb1.jpg"/> */}
                         <img src={img.imageUrl}/>
                         <div className={styles.inner}>
                            <div>
                                <h2>*{img.title}</h2>
                            </div>
                            <div className={styles.imgIcon}>
                                <button onClick={()=>{updateImageHandler(img)}}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"/>
                                </button>
                                <button onClick={()=>{deleteImageHandler(img.id)}}>
                                    <img src ="https://cdn-icons-png.flaticon.com/128/8848/8848798.png"/>
                                </button>       
                            </div>
                         </div>                         
                </div>)
            })}

        </div>
        </>
    )
}
export default ImageListRedux;