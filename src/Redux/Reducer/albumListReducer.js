import {  FETCH_ALBUM } from "../Action/albumListAction";

const initialState = {
    album : {},
    albums : []
}
export function albumListReducer(state= initialState, action){
    switch(action.type){
        case FETCH_ALBUM : {
            return {
                ...state,
                albums : action.payload              
            }
        }
            default : {
                return state
            }
        
    }
}