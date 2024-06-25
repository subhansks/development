
"use client";

import React from 'react';
import Loader from './Loader';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false, loading: () => <Loader /> });

const Rich_Text_editor = () => {
    const [editorContent, setEditorContent] = useState<string>('');
    const handleEditorChange = (content: string) => {
        setEditorContent(content);
    };
    return (
        <div className='flex flex-col gap-3' >
            <h1 className='font-bold text-xl'>Vad tycker du?</h1>
            <ReactQuill className='bg-dealguru-white flex flex-col-reverse border-none rounded-lg border-white target_child ' value={editorContent} onChange={handleEditorChange} />

        </div>
    );
};
export default Rich_Text_editor;