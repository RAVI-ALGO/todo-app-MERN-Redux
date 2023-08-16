import * as actionTypes from '../Actions/actionTypes'

export const  tabReducer = (state =actionTypes.ALL_TODOS,action) =>{
    switch(action.type){
        case actionTypes.ToggleTab:
            return action.filter

            default: return state
    }
}