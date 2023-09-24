import { createSlice } from "@reduxjs/toolkit"

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    detail: {},
  },
  reducers: {
    getAllChars: (state, action) => {
      state.characters = action.payload
    },
    getCharById: (state, action) => {
      state.detail = action.payload
    },
  },
})

export const { getAllChars, getCharById } = charactersSlice.actions

export default charactersSlice.reducer