//constraint
export const ALBUM_CLICK = "ALBUM_CLICK";
export const RESET_ALBUM = "RESET_ALBUM"

//ACTION
export const albumClick = (album)=>({
    type : ALBUM_CLICK,
    payload : album
})
export const resetAlbum = ()=>({
    type : RESET_ALBUM
})

