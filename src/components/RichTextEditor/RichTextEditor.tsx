import { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './RichTextEditor.scss';

interface Props {
  defaultValue: any;
  handleChange: (data: any) => void;
}

export default function RichTextEditor({ defaultValue, handleChange }: Props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(defaultValue || '');
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap,
    );
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  }, [defaultValue]);

  const handleEditorChange = (data: any) => {
    setEditorState(data);
    handleChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      wrapperClassName='demo-wrapper'
      editorClassName='demo-editor'
      onEditorStateChange={handleEditorChange}
      toolbar={{
        options: [
          'inline',
          'blockType',
          'fontSize',
          'list',
          'textAlign',
          'colorPicker',
          'history',
          'link',
        ],
        list: { options: ['unordered', 'ordered'] },
      }}
    />
  );
}
