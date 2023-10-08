import { mergeAttributes, nodeInputRule } from "@tiptap/core";
import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { AutoSizeImage } from "./components/ImageResizeNode";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    image: {
      /**
       * Add an image
       */
      setImage: (options: {
        src: string;
        alt?: string;
        title?: string;
      }) => ReturnType;
    };
  }
}

export const inputRegex =
  /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;

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
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, any>;
}

export const ImageSizeExtension = Image.extend<ImageSizeExtensionOptions>({
  addOptions() {
    return {
      minWidth: "200px",
      maxWidth: "1000px",
      activeBorderColor: "green",
      levels: [300, 600, 900],
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
    };
  },
  addNodeView() {
    return ReactNodeViewRenderer(AutoSizeImage);
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      width: {
        default: null,
      },
      height: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: this.options.allowBase64
          ? "img[src]"
          : 'img[src]:not([src^="data:"])',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addCommands() {
    return {
      setImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => {
          const [, , alt, src, title] = match;

          return { src, alt, title };
        },
      }),
    ];
  },
});
