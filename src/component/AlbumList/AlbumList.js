import styles from "./AlbumList.module.css"
import { useEffect, useState } from "react";
import AlbumForm from "../AlbumForm/AlbumForm";
import { db } from "../../firebaseinit";
import {doc, collection, getDocs, addDoc } from "firebase/firestore/lite"
//import { addDoc } from "firebase/firestore";
const AlbumList = ({albumClickHandler})=>{
    const [isAlbumCreat, setIsAlbumCreate] = useState(false)
    const [albums, setAlbums] = useState([])
    // Initialize the albums state when the component mounts
    useEffect(()=>{
        async function getData(){
            const docRef = collection(db, "albums")
            const docSnap = await getDocs(docRef)
            const allAlbums = docSnap.docs.map((alb)=>{
                return{
                    id : alb.id,
                    ...alb.data()
                }
            })
            setAlbums(allAlbums)
        }
        getData();
    }, [])
   
    const handleCreate=()=>{
        // setIsAlbumCreate(true)
        setIsAlbumCreate(prevState => !prevState);
    }

    const addAlbum= async (album)=>{
        console.log("add the album name :", album.name)
        setAlbums([
            {
            text:album.name,
            images:album.images,
            id:album.id}
             , ...albums])
        console.log("albums : ", albums)

        //fire base implement
        await addDoc(collection(db, "albums"),{
                text: album.name,
                images: []
        })

    }
   
    return(
        <>
        {/* <AlbumForm/> */}
        { isAlbumCreat ? <AlbumForm addAlbum={addAlbum}/> : null}
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div>
                    <span> Your album </span>                    
                </div>
                <div>
                    <button onClick={handleCreate}
                    className={isAlbumCreat ? styles.cancleButton : styles.addButton}
                    >
                       { isAlbumCreat ? "cancle" : "Create Album"}
                        </button>
                </div>
            </div>
            <div className={styles.albumContainer}>
                {albums.map((album, index) => {
                    return(
                        <div key={index} onClick={()=>{albumClickHandler(album)}}>
                        {/* <img src="https://media.istockphoto.com/id/1187393377/vector/camera-bag-modern-line-colorful-illustration-vector-design-template.jpg?s=1024x1024&w=is&k=20&c=fJV0CfTyEoz0FBllXm8evYnzOS4NyaVke_7XVBLC_z8="/> */}
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819"></img>
                        <span>{album.text}</span>
                        
                    </div>
                    )
                })}
                <h1> add .....</h1>
                https://drive.google.com/file/d/10B6h7dcgX9CX7m8XIw-MrfXa6jYEnLYP/view?usp=sharing
                https://drive.google.com/uc?export=view&id=10B6h7dcgX9CX7m8XIw-MrfXa6jYEnLYP

            </div>
        </div>
        
        </>
    )
}
export default AlbumList;