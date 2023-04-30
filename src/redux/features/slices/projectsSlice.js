import { createSlice } from "@reduxjs/toolkit";
import { projectsDataUa, projectsDataEn } from '../../../data/projectsData';

const initialState = {
    projectsUa: projectsDataUa,
    projectsEn: projectsDataEn
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    }
})


export default projectsSlice