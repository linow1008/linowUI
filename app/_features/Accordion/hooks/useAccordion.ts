'use client'
import { useEffect, useRef, useState } from 'react'

export const useAccordion = (singleOpen: boolean) => {
  const [openIndices, setOpenIndices] = useState<number[]>([])
  const refElements = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const toggleAccordion = (index: number) => {
    if (singleOpen) {
      if (openIndices.includes(index)) {
        setOpenIndices([])
      } else {
        setOpenIndices([index])
      }
    } else {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index))
      } else {
        setOpenIndices([...openIndices, index])
      }
    }
  }

  useEffect(() => {
    const currentRefs = refElements.current
    Object.keys(currentRefs).forEach((key) => {
      const element = currentRefs[Number(key)]
      if (element) {
        element.style.maxHeight = openIndices.includes(Number(key))
          ? `${element.scrollHeight}px`
          : '0px'
      }
    })
  }, [openIndices])

  return { openIndices, refElements, toggleAccordion }
}
