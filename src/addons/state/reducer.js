import {createSlice} from "@reduxjs/toolkit"

const initialThemeStateValue = {
    bgColor1: 'j-color10',
    bgColorAlt1: 'j-color11',
    bgColor2: 'j-color4',
    bgColorAlt2: 'j-color6',
    txtColor1: 'j-text-color6',
    txtColor2: 'j-text-color7',
    border: 'j-border-1 j-border-color2'
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