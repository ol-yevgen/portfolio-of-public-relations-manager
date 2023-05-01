import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageLoadingStatus: 'idle',
}

const pageSlice = createSlice({
    name: 'pageLoading',
    initialState,
    reducers: {
        pageFetching: state => { state.pageLoadingStatus = 'loading' },
        pageFetched: (state, action) => {
            state.heroes = action.payload
            state.pageLoadingStatus = 'idle'
        },
        pageFetchingError: state => {
            state.heroesFetchingError = 'error'
        },
        
    }
});

const { actions, reducer } = pageSlice;

export default reducer;
export const {
    pageFetching,
    pageFetched,
    pageFetchingError,
    filtersChanged
} = actions;