import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PageState {
  page: number
}

const initialState = { page: 1 } as PageState

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
  },
})

export const { setPage } = pageSlice.actions
export default pageSlice.reducer