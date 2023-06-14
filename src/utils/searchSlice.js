import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        addSearchCashe:(state, action) => {
            if(Object.keys(state).length === 50){
               for( let i in state){
                delete state[i];
                break;
               }
               state = Object.assign(state, action.payload);
            }else{
                state = Object.assign(state, action.payload);
            }
         
        }
    }
});

export const { addSearchCashe } = searchSlice.actions;
export default searchSlice.reducer;