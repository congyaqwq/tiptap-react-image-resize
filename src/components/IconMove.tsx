import React from "react"

export const IconMove = ({ size = 20 }: { size?: number }) => {
  const width = size;
  const height = size;

  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-move-horizontal" width={width} height={height} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M18 9l3 3l-3 3"></path>
    <path d="M15 12h6"></path>
    <path d="M6 9l-3 3l3 3"></path>
    <path d="M3 12h6"></path>
  </svg>
}