import { createSlice } from '@reduxjs/toolkit'



export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {

    invoices: [],
    items: [],
    shops: [],
    invoicesIdCount: 0,
    itemsIdCount: 0,
    shopsIdCount: 0,
    status: 'waiting'
  },
  reducers: {
    initStateFromApi: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.invoices = action.payload.Invoices;
      state.items = action.payload.Items;
      state.shops = action.payload.Shops;
      state.invoicesIdCount = action.payload.InvoicesIdCount;
      state.itemsIdCount = action.payload.itemsIdCount;
      state.shopsIdCount = action.payload.ShopsIsCount;
      state.status = 'loaded'
    }
  },
})

// Action creators are generated for each case reducer function
export const { initStateFromApi} = invoiceSlice.actions

export default invoiceSlice.reducer