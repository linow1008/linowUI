'use client'

import Accordion1 from '@/app/_features/Accordion/Accordion1'
import Modal from '@/app/_features/Modal/Modal'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center space-x-10">
        <Accordion1 />
        <Accordion1 singleOpen />
      </div>
    </div>
  )
}
