import styles from "./ImageList.module.css"
import { useState, useEffect} from "react"
import ImageForm from "../ImageForm/ImageForm"
const ImageList=({album})=>{
    const [isAddImage, setIsAddImage] = useState(false)
    const [updateAlbum, setUpdateAlbum] = useState(album)

    useEffect(() => {
        setUpdateAlbum(album);
    }, [album]); 

    const addImageHandler=()=>{
        setIsAddImage(prevState => !prevState)
        // console.log("updateAlbum.......", updateAlbum)
    }
    // const updateAlbumImagesArray=(updatedAlbum)=>{
    //     setUpdateAlbum(updatedAlbum)
    // }

    const updateAlbumImagesArray = (updatedAlbum) => {
        setUpdateAlbum(prevAlbum => {
            // Merge the updated images into the previous album
            return { ...prevAlbum, images: updatedAlbum.images };
        });
    }
 
    return(
        <>
        {/* <ImageForm/> */}
        {isAddImage ? <ImageForm album={album} 
        updateAlbumImagesArray={updateAlbumImagesArray}
        /> : null}
        <div className={styles.imageListContainer}>
            <div><img src="https://cdn-icons-png.flaticon.com/128/8022/8022662.png" /></div>
            <div><h1>
                {isAddImage ? `Image in ${album.text}` : `${updateAlbum.images}` ? `Image in ${album.text}` : "No images found in the album."}
            </h1></div>
            <div>
                <button 
                    onClick={()=>{addImageHandler()}}
                    className={isAddImage ? styles.cancleButton : styles.addButton}>
                    {isAddImage ? "cancle" : "Add image" }
                </button>
            </div>
        </div>
        <div className={styles.imageListContainer2}>
            {updateAlbum.images.map((img, index) => {
                console.log("inside map function")
               return(<div key={index}>
                        <div className={styles.image}>
                            <img src="https://static.vecteezy.com/system/browse_category/image/45/large_People_cb1.jpg"/>
                        </div>
                        <div className={styles.title}>
                            <div>{img.title}</div>
                            <div>icon</div>
                        </div>
                                          
                </div>)
            })}

        </div>
        </>
    )
}
export default ImageList;