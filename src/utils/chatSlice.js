import { createSlice } from "@reduxjs/toolkit";
import { CHAT_MESSAGE_LIMIT_COUNT } from "./constant";

const chatSlice = createSlice({
    name:'chat',
    initialState:[],
    reducers:{
        addChatMessage:(state, action) => {
           state.splice(CHAT_MESSAGE_LIMIT_COUNT, 1);
           state.unshift(action.payload);
        }
    }
});

export const { addChatMessage } = chatSlice.actions;
export default chatSlice.reducer;

