import { TitleSectionProps } from '@/types';
import React from 'react';

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <h3 className='border-b border-t border-black py-5 text-center text-8xl uppercase dark:border-white'>{title}</h3>
  );
};
