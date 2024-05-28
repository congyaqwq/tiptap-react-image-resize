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
        <img src="https://w.wallhaven.cc/full/zy/wallhaven-zyj8gw.jpg" />
        <img src="https://w.wallhaven.cc/full/j8/wallhaven-j8d63q.jpg" />
      `,
  })
  return (
    <div>
      <h1>
        <a href='https://wallhaven.cc/'>image from https://wallhaven.cc</a>
      </h1>
      <Analytics />
      <div style={{border: '1px solid gray'}}>
      <EditorContent editor={editor} />
      </div>
    </div>
  )
}
