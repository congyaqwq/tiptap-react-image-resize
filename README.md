# tiptap-react-image-resize

## description

it's a npm package for tiptap-react extension  
resized by css default property `resize: both`  

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


## others 
if it's helpful for you, please give me a star !   
because I don't hava a project more than 10 star yet (:  
