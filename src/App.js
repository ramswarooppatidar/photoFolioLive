import "./App.css"
// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import AlbumList from "./component/AlbumList/AlbumList";
import ImageList2 from "./component/ImageList/ImageList2";
import { useState } from "react";
function App() {
  toast.success("page loading......");
  const [isInsideAlbum, setIsInsideAlbum] = useState(false)
  const [album, setAlbum] = useState()
  
  const albumClickHandler=(album)=>{
    setIsInsideAlbum(true)
    setAlbum(album)
  }
  const goBackToAlbumList = () => {
    setIsInsideAlbum(false);
    setAlbum(null)
  }
  console.log("back to appp ..............")
  return (
    <>
    <ToastContainer/> 
    <nav className="navbar">
      <div className="logo">
        <img src="https://media.istockphoto.com/id/1187393377/vector/camera-bag-modern-line-colorful-illustration-vector-design-template.jpg?s=1024x1024&w=is&k=20&c=fJV0CfTyEoz0FBllXm8evYnzOS4NyaVke_7XVBLC_z8="/>
        <span><h3>PhotoFollio</h3></span>
      </div>
    </nav>
    {isInsideAlbum ? <ImageList2 album={album} goBackToAlbumList={goBackToAlbumList}/> : <AlbumList albumClickHandler={albumClickHandler}/>}

    </>
  );
}

export default App;