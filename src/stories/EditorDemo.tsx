import React from 'react'
import { EditorContent, useEditor } from "@tiptap/react"
import Image from '@tiptap/extension-image'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import { ImageSizeExtension } from '../ImageSizeExtension'
import { Analytics } from '@vercel/analytics/react';


export const EditorDemo = () => {
  const editor = useEditor({
    extensions: [ Document, Text, ImageSizeExtension.configure( {
      maxWidth: "1000px"
    }) ],
    content: `
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
      `,
  })
  return (
    <div>
      <Analytics />
      <EditorContent editor={editor} />
    </div>
  )
}
