# tiptap-react-image-resize

## install

### npm

`npm i tiptap-react-image-resize`

### yarn

`yarn add tiptap-react-image-resize`

## description

it's a npm package for tiptap-react extension  
resized by `onMouseDown` and `onMouseMove` event

## usage

```tsx
export const EditorDemo = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Text,
      ImageSizeExtension.configure({
        maxWidth: "800px",
      }),
    ],
    content: `
        <img src="https://source.unsplash.com/8xznAGy4HcY/800x400" />
        <img src="https://source.unsplash.com/K9QHL52rE2k/800x400" />
      `,
  });
  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};
```

## configuration

```typescript
export interface ImageSizeExtensionOptions {
  // image min width
  minWidth: string | number;
  // image max width & loader default width
  maxWidth: string | number;
  // border color when selected
  activeBorderColor: string;
  // image size level, default set to [300, 600, 900]
  levels: [number, number, number] | [number, number];
  // display `inline-block` or `block`, default to false
  display: 'inline-block' | 'block';
  allowBase64: boolean;
  HTMLAttributes: Record<string, any>;
}
```

## online demo

[online demo by vercel](https://tiptap-react-image-resize-fzzs.vercel.app/?path=/story/example-editordemo--demo)

## others

if it's helpful for you, please give me a star !
