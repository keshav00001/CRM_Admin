import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../styles/quilEditor.css'

export const QuillEditor = (props) => (
    <ReactQuill style={{
        marginTop: '10px'
    }} placeholder={props?.placeholder} theme="snow" >
        <div className='editor-text-area' >
        </div>
    </ReactQuill>)
