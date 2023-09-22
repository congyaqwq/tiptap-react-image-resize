import React from "react"

export const IconResize = ({size=20}: {size?: number}) => {
  const width = size;
  const height = size;

  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aspect-ratio" width={width} height={height} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
    <path d="M7 12v-3h3"></path>
    <path d="M17 12v3h-3"></path>
  </svg>
}