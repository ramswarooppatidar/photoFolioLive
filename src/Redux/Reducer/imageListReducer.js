import { SAVE_IMAGE,
         DELETE_IMAGE,
         UPDATE_IMAGE_HANDLER,
         UPDATE_IMAGE_HERE,
         RESET_UPDATE_IMAGE }     from "../Action/imageListAction";

const initialState = {
    updateImages : {},
    images : []
}

export function imageListReducer(state = initialState, action){
    switch(action.type){
        case SAVE_IMAGE :
            return{
                ...state,
                images : [
                    ...state.images,
                    action.payload
                ]
            }
        case DELETE_IMAGE :
            return{
                ...state,
                images : state.images.filter((img) => img.id !== action.id)
            }
        case UPDATE_IMAGE_HERE : 
            return{
                ...state,
                images : state.images.map((img)=>
                    img.id === action.id ? action.payload : img
                )
            }
        case UPDATE_IMAGE_HANDLER :
            return{
                ...state,
                updateImages : action.payload
            }
        case RESET_UPDATE_IMAGE :
            return{
                ...state,
                updateImages : {}
            }
        default :
           return state
    }
}