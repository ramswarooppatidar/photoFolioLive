import { ALBUM_CLICK, RESET_ALBUM} from "../Action/appAction";

const initialState = {
    album : {}
}
export function appReducer(state= initialState, action){
    switch(action.type){
        case ALBUM_CLICK : 
          console.log("inside album clicked function", action.payload)
            return {
                ...state,
                album : action.payload

            }
        case RESET_ALBUM : 
            return { 
                ...state,
                album : {}
            }
            default : {
                return state
            }
        
    }
}