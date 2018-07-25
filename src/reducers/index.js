import { ADD_NOTE, DELETE_NOTE } from "../actions";

const initialState={note:[]}

export function noteReducer(state=initialState, action){
    switch (action.type){
        case ADD_NOTE:
            const a = state.note.slice();
            a.push(action.payload);
            return Object.assign({},{ note: a })
        case DELETE_NOTE:
            state.note.splice(action.payload,1);
            const arr = state.note.slice();
            return Object.assign({}, {note:arr});
        default: 
            return initialState
    }
} 



