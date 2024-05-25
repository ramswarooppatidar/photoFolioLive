
import { CREATE_ALBUM } from "../Action/albumFormAction";

const initialState = { 
    albums : []
}
export function albumFormReducer(state=initialState, action){
    switch(action.type){
        case CREATE_ALBUM : {
            console.log("create album :", action.payload)
            return{
                ...state,
                albums : [
                    ...state.albums,action.payload
               ]
            }
        }
        default : {
            return state;
        }
    }
}