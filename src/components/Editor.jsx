import { useSelector, useDispatch } from 'react-redux'
import { selectEditor, selectEditorMax, selectPreviewerMax, updateMarkdown, maximizeEditor } from '../features/markdown/markdownSlice'

function Editor() {
    const editor = useSelector(selectEditor)
    const editorMax = useSelector(selectEditorMax)
    const previewerMax = useSelector(selectPreviewerMax)
    const dispatch = useDispatch()

    return (
        <div className={`editorWrap ${editorMax ? 'maximized' : ''} ${previewerMax ? 'hide' : ''}`}>
            <div className="toolbar">
                <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Editor<i className={`fa ${editorMax ? 'fa-compress' : 'fa-arrows-alt'}`} onClick={() => dispatch(maximizeEditor())}></i>
            </div>
            <textarea id="editor" type="text" onChange={(e) => dispatch(updateMarkdown(e.target.value))} value={editor}></textarea>
        </div>
    )
}
export default Editor