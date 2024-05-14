import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from "@tiptap/react"
import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import { ImageSizeExtension } from '../ImageSizeExtension'


export const EditorDemo = () => {

  const editor = useEditor({
    extensions: [Document, Text, ImageSizeExtension.configure({
      // maxWidth: "600px"
      display: 'block'
    })],
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
