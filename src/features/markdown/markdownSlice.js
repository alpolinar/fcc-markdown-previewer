import { createSlice } from '@reduxjs/toolkit'
import { editorDefault } from './constants'

const initialState = {
    editor: editorDefault,
    editorMax: false,
    previewerMax: false,
}

export const markdownSlice = createSlice({
    name: 'markdown',
    initialState,
    reducers: {
        updateMarkdown: (state, action) => {
            state.editor = action.payload
        },
        maximizeEditor: (state) => {
            state.editorMax = state.editorMax ? false : true
        },
        maximizePreviewer: (state) => {
            state.previewerMax = state.previewerMax ? false : true
        }
    }
})

export const { updateMarkdown, maximizeEditor, maximizePreviewer } = markdownSlice.actions

export const selectEditor = (state) => state.markdown.editor
export const selectEditorMax = (state) => state.markdown.editorMax
export const selectPreviewerMax = (state) => state.markdown.previewerMax

export default markdownSlice.reducer