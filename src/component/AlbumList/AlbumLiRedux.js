import styles from "./AlbumList.module.css"
import { useEffect, useState } from "react";
//normal component
// import AlbumForm from "../AlbumForm/AlbumForm";

//redux component
import AlbumFormRedux from "../AlbumForm/AlbumFoRedux";

import { db } from "../../firebaseinit";
import {doc, collection, getDocs, addDoc } from "firebase/firestore/lite"

//redux implement
import { useDispatch, useSelector } from "react-redux";
import {fetchAlbum } from "../../Redux/Action/albumListAction";
import { albumClick } from "../../Redux/Action/appAction";


const AlbumListRedux = ({album})=>{
    console.log("inside albumList Redux......")
    const [isAlbumCreat, setIsAlbumCreate] = useState(false)
    const albums = useSelector((state)=> state.albumListCombReducer.albums)
    console.log("albums in List :", albums)

    const dispatch = useDispatch()   
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
            // setAlbums(allAlbums)
            dispatch(fetchAlbum(allAlbums))
        }
        getData();
    }, [])
    
   
    const handleCreate=()=>{
        setIsAlbumCreate(prevState => !prevState);
    }
    return(
        <>
        {/* <AlbumForm/> */}
        { isAlbumCreat ? <AlbumFormRedux/> : null}
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
                        <div key={index} onClick={()=>{dispatch(albumClick(album))}}>
                        {/* <img src="https://media.istockphoto.com/id/1187393377/vector/camera-bag-modern-line-colorful-illustration-vector-design-template.jpg?s=1024x1024&w=is&k=20&c=fJV0CfTyEoz0FBllXm8evYnzOS4NyaVke_7XVBLC_z8="/> */}
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sphere-glass-the-mixtape-cd-cover-design-template-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts=1602178819"></img>
                        <span>{album.text}</span>
                        
                    </div>
                    )
                })}
                
            </div>
        </div>
        
        </>
    )
}
export default AlbumListRedux;