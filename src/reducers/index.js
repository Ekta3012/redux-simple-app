import { ADD_NOTE } from "../actions";

const initialState={note:[]}

export function addReducer(state=initialState, action){
    switch (action.type){
        case ADD_NOTE:
            debugger;
            const a = state.note.slice();
            a.push(action.payload);
            return Object.assign({},{ note: a })
      
        default: 
            return initialState
    }
} 

