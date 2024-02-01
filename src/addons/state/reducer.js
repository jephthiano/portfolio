import {createSlice} from "@reduxjs/toolkit"

const initialThemeStateValue = {
    bgColor1: 'j-color4', 
    bgColor2: 'j-color3',
    txtColor1: 'j-text-color7',
    txtColor2: 'j-text-color6',
    border: 'j-border-2 j-border-color6'
};

const themeSlice = createSlice({
   name: 'theme',			//name of the slice i.e state
   initialState: {value:initialThemeStateValue}, // initial state value
   reducers:{
    changeTheme: (state,action) => { //reducer, takes 2 arguments, state and action triggers the
      state.value = action.payload;
    }
   },
});

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer;