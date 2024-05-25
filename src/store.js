// import {redux} from "redux"

import { albumFormReducer } from "./Redux/Reducer/albumFormReducer";
import { albumListReducer } from "./Redux/Reducer/albumListReducer";
import { imageListReducer } from "./Redux/Reducer/imageListReducer";
import { appReducer } from "./Redux/Reducer/appReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    albumFormCombReducer : albumFormReducer,
    albumListCombReducer  : albumListReducer,
    imageListCombReducer : imageListReducer,
    appCombReducer : appReducer
})

// export const store = redux.createStore(albumFormReducer)
// export const store = redux.createStore(rootReducer)
export const store = createStore(rootReducer)