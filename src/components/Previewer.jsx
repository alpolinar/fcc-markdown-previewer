import { useSelector, useDispatch } from 'react-redux'
import { selectEditor, selectEditorMax, selectPreviewerMax, maximizePreviewer } from '../features/markdown/markdownSlice'
import ReactMarkdown from 'react-markdown'

function Previewer() {
    const editor = useSelector(selectEditor)
    const editorMax = useSelector(selectEditorMax)
    const previewerMax = useSelector(selectPreviewerMax)
    const dispatch = useDispatch()
    return (
        <div className={`previewWrap ${previewerMax ? 'maximized' : ''} ${editorMax ? 'hide' : ''}`}>
            <div className="toolbar">
                <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Previewer<i className={`fa ${previewerMax ? 'fa-compress' : 'fa-arrows-alt'}`} onClick={() => dispatch(maximizePreviewer())}></i>
            </div>
            <div id="preview">
                <ReactMarkdown>{editor}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Previewer