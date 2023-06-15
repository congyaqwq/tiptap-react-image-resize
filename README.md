# tiptap-react-image-resize

## description

it's a npm package for tiptap-react extension

## usage

```tsx
export const EditorDemo = () => {
  const editor = useEditor({
    extensions: [ Document, Text, ImageSizeExtension.configure( {
      maxWidth: "800px"
    }) ],
    content: `
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
      `,
  })
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  )
}
```

## online demo

[online demo by vercel](https://tiptap-react-image-resize-fzzs.vercel.app/?path=/story/example-editordemo--demo)
