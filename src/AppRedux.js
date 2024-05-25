import "./App.css"
// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//redux init
import { Provider,  useSelector, useDispatch } from "react-redux";
import { store } from "./store";

import ImageListRedux from "./component/ImageList/imageListRedux";
import AlbumListRedux from "./component/AlbumList/AlbumLiRedux";
import { albumClick, resetAlbum } from "./Redux/Action/appAction";


import { useState } from "react";
function AppRedux() {
  // toast.success("page loading......");
  const [isInsideAlbum, setIsInsideAlbum] = useState(false)
  const [album, setAlbum] = useState()
  //  const album = useSelector((state)=>state.appCombReducer.album)
  // const dispatch = useDispatch()
  const albumClickHandler=(album)=>{
    setIsInsideAlbum(true)
    setAlbum(album)
    // dispatch(albumClick(album))
  }
  const goBackToAlbumList = () => {
    setIsInsideAlbum(false);
    setAlbum(null)
    // dispatch(resetAlbum())
  }
  console.log("back to appp ..............")
  return (
    <>
     <ToastContainer/> 
    <Provider store={store}>
        <nav className="navbar">
        <div className="logo">
            <img src="https://media.istockphoto.com/id/1187393377/vector/camera-bag-modern-line-colorful-illustration-vector-design-template.jpg?s=1024x1024&w=is&k=20&c=fJV0CfTyEoz0FBllXm8evYnzOS4NyaVke_7XVBLC_z8="/>
            <span><h3>PhotoFollio</h3></span>
        </div>
        </nav>
        {isInsideAlbum ?
        (<ImageListRedux  goBackToAlbumList={goBackToAlbumList}/> 
        ) : ( <AlbumListRedux   albumClickHandler={albumClickHandler}/> 
        ) }
    </Provider>
    </>
  );
}

export default AppRedux;