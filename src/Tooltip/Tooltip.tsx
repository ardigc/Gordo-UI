import { ElementType, ReactNode, useEffect, useState } from 'react'
export interface TooltipProps {
  children: ReactNode
}
export default function Tooltip({ children }: TooltipProps) {
  return <div>{children}</div>
}
