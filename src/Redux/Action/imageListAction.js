//constrauint 
export const SAVE_IMAGE = "SAVE_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";
export const UPDATE_IMAGE_HANDLER = "UPDATE_IMAGE_HANDLER";
export const RESET_UPDATE_IMAGE = "RESET_UPDATE_IMAGE";
export const UPDATE_IMAGE_HERE = "UPDATE_IMAGE_HERE"

//action
export const saveImage = (image)=>({
    type : SAVE_IMAGE,
    payload : image
})

export const deleteImage = (id)=>({
    type : DELETE_IMAGE,
    payload : id
})

export const updateImageHandler = ()=>({
    type : UPDATE_IMAGE_HANDLER
})

export const resetUpdateImage = ()=>({
    type : RESET_UPDATE_IMAGE
})

export const updateImageHere = (updatedImage)=>({
    type : UPDATE_IMAGE_HERE,
    payload : updatedImage
 })
