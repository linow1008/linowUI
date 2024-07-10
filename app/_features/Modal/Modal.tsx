'use client'

import React, { useState } from 'react'

type Props = {
  onClose: () => void
  title: string
  isOpen: boolean
  children: React.ReactNode
}

const Modal = ({ onClose, title, isOpen, children }: Props) => {
  const toggle = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* 배경 */}
      <div className="fixed inset-0 transition-opacity" onClick={toggle}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      {/* 콘텐츠 */}
      <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h2>{title}</h2>
          <button onClick={toggle} className="cursor-pointer">
            X
          </button>
        </div>

        {/* Body */}
        <div className="border-b px-4 py-5 sm:p-6">{children}</div>
        {/* Footer */}
        <div className="px-6 py-4">
          <div>Footer</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
