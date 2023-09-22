import React from "react"
import './loader.css'

export interface LoaderProps {
  width: number| string
}

export function Loader(props: LoaderProps) {
  const {width} = props;

  return <div className="image-resize-plugin-loader-container" style={{width: width}}>
    <div className="image-resize-plugin-lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
}