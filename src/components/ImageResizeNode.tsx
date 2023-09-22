
import { NodeViewWrapper } from '@tiptap/react';
import React, { useEffect, useRef, useState } from 'react';
import { ImageSizeExtensionOptions } from '../ImageSizeExtension';
import { IconMove } from './IconMove';
import { IconResize } from './IconResize';
import { Loader } from './Loader';
import './main.css';

const covertPxToNum = (value: string | number) => {
  if (typeof value === 'string') {
    return Number(value.split('px')[0])
  }
  return value
}

const iconSizes = [16, 18, 20]

export const AutoSizeImage = (props: any) => {
  const imageProps = props.node.attrs;
  const options = props.extension.options as ImageSizeExtensionOptions;

  const ref = useRef<HTMLDivElement>(null);

  const [isLoad, setIsLoad] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [imageWidth, setImageWidth] = useState(imageProps.width)

  useEffect(() => {
    let observer = new ResizeObserver(function (mutations) {
      const { contentRect } = mutations[0]
      const { width, height } = contentRect
      props.updateAttributes({ width: `${width}px`, height: `${height}px` });
    });
    isLoad && observer.observe(ref.current!);
  }, [isLoad])

  useEffect(() => {
    const onMouseMove = (e) => {
      if (isActive && props.selected) {
        if (e.pageX < covertPxToNum(options.minWidth)) return
        if (e.pageX > covertPxToNum(options.maxWidth)) return
        setImageWidth(e.pageX)
      }
    }
    const onMouseUp = () => {
      setIsActive(false)
    }
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [isActive, props.selected])

  useEffect(() => {
    const preloadImage = (src) => {
      let img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoad(true)
      }
    }
    preloadImage(imageProps.src)
  }, [])

  return (
    <NodeViewWrapper style={{ display: options.inline ? 'inline-block' : 'block', width: 'min-content', position: 'relative', zIndex: 10 }}>
      {!isLoad && <Loader width={options.maxWidth} />}
      {isLoad && <div
        ref={ref}
        style={{
          outline: props.selected ? `2px solid ${options.activeBorderColor}` : 'none',

        }}>
        <img style={{
          maxWidth: options.maxWidth,
          minWidth: options.minWidth,
        }} width={imageWidth} src={imageProps.src} />
        {props.selected && <div style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex' }}>
          {options.levels.map((level, index) =>
            <div key={level} title={`${level} px`} className='image-resize-plugin-icon' onClick={() => setImageWidth(level)}><IconResize size={iconSizes[index]} /></div>
          )}
          <div title='max' className='image-resize-plugin-icon' onClick={() => setImageWidth(options.maxWidth)}><IconResize size={24} /></div>
          <div title='move' className='image-resize-plugin-icon' onMouseDown={() => setIsActive(true)} style={{ cursor: 'move' }} >
            <IconMove />
          </div>
        </div>}
      </div>}
    </NodeViewWrapper>
  );
};
