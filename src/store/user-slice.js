import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        allUsers : [],
        currentUser : {},
        allUsersloaded : false
    },
    reducers: {
       addUsers(state, action) {
         state.allUsers = action.payload;
         state.usersloaded = true;
       },
       addUser(state, action) {
        state.currentUser = action.payload;
      },
    }
})

export const usersActions = userSlice.actions;

export default userSlice;
