export const ADD_NOTE = 'ADDNOTE';
export const DELETE_NOTE = 'DELETENOTE';


export const addNoteAction = (input) => ({
    type: ADD_NOTE,
    payload: input
})

export const deleteNoteAction=(key)=>({
    type :DELETE_NOTE,
    payload:key
})