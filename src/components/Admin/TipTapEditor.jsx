'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useState, useEffect } from 'react';

export default function TipTapEditor({ value, onChange, placeholder }) {
  const [isMounted, setIsMounted] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: placeholder || 'Write your content here...',
      }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg max-w-none focus:outline-none min-h-[200px] p-4',
      },
    },
    // ✅ Fix the warning - explicitly set immediatelyRender to false for client-side rendering
    immediatelyRender: false,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  if (!isMounted) {
    return (
      <div className="h-64 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Loading editor...</span>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="border-b border-gray-200 p-2 bg-gray-50 flex flex-wrap gap-1">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('bold') ? 'bg-gray-200' : ''}`}
          type="button"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('italic') ? 'bg-gray-200' : ''}`}
          type="button"
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('strike') ? 'bg-gray-200' : ''}`}
          type="button"
        >
          <s>S</s>
        </button>
        <span className="w-px bg-gray-300 mx-1" />
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
          type="button"
        >
          H2
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
          type="button"
        >
          H3
        </button>
        <span className="w-px bg-gray-300 mx-1" />
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('bulletList') ? 'bg-gray-200' : ''}`}
          type="button"
        >
          • List
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition ${editor?.isActive('orderedList') ? 'bg-gray-200' : ''}`}
          type="button"
        >
          1. List
        </button>
        <span className="w-px bg-gray-300 mx-1" />
        <button
          onClick={() => editor?.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded hover:bg-gray-200 transition"
          type="button"
        >
          ―
        </button>
        <button
          onClick={() => editor?.chain().focus().undo().run()}
          className="p-2 rounded hover:bg-gray-200 transition"
          type="button"
        >
          ↩
        </button>
        <button
          onClick={() => editor?.chain().focus().redo().run()}
          className="p-2 rounded hover:bg-gray-200 transition"
          type="button"
        >
          ↪
        </button>
      </div>
      
      {/* Editor Content */}
      <EditorContent editor={editor} className="min-h-[200px]" />
    </div>
  );
}