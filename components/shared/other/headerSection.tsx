import { HeaderSectionProps } from '@/types'
import React from 'react'

export const HeaderSection = ({children,header}:HeaderSectionProps) => {
  return (
    <section className='space-y-5'>
        <h3>{header}</h3>
        {children}
    </section>
  )
}
