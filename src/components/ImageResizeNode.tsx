
import { NodeViewWrapper } from '@tiptap/react';
import React, { useEffect, useRef } from 'react';
import { useElementSize } from '../hooks/use-element-size';
import { ImageSizeExtensionOptions } from '../ImageSizeExtension';
import styled from 'styled-components'

const StyledImageWrapper = styled('div')<{scrollbarWidth: string}>`
  boxSizing: content-box;
  resize: horizontal;
  overflow: scroll;
  '&::-webkit-scrollbar': {
    backgroundColor: transparent;
    width: scrollbarWidth;
  }
`


export const AutoSizeImage = (props: any) => {
  const imageProps = props.node.attrs;
  const options = props.extension.options as ImageSizeExtensionOptions;
  const SCROLLBAR_WIDTH = options.scrollbarWidth;

  const originSize = useRef({
    width: imageProps.width,
    height: imageProps.height,
  });

  const { ref, width, height } = useElementSize();

  useEffect(() => {
    if (width) {
      setTimeout(() => {
        props.updateAttributes({ width: `${width}px`, height: `${height}px` });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  return (
    <NodeViewWrapper style={{ display: options.inline? 'inline-block': 'block' }}>
      <StyledImageWrapper
        scrollbarWidth={SCROLLBAR_WIDTH}
        style={{
            maxWidth: options.maxWidth,
          minWidth: options.minWidth,
        
           outline: props.selected ? `2px solid ${options.activeBorderColor}` : 'none',
          width: imageProps?.width
            ? Number(imageProps.width.split('px')[0]) + SCROLLBAR_WIDTH
            : originSize.current.width || options.defaultSize,
        }}>
        <img ref={ref} width={'100%'} src={imageProps.src} />
      </StyledImageWrapper>
    </NodeViewWrapper>
  );
};
