import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
const elementRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: elementRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      onContentChange(editor.getMarkdown());
    });

    editorRef.current = editor;

    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={elementRef} />;
  // END
};

export default MarkdownEditor;
