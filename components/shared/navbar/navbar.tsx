import { navbarItems } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LinkCustom } from '@/components/shared';

export const Navbar = () => {
  return (
    <header>
      <nav className='flex items-center justify-between'>
        <Link data-cy='logo' href='/'>
          <Image
            className='rounded-full bg-white'
            src='/logo.png'
            width={60}
            height={60}
            alt='Logo'
          />
        </Link>
        <ul className='flex gap-5'>
          {navbarItems.map((v, i) => (
            <li key={i}>
              <LinkCustom pathActive={v.link}  href={v.link}>{v.name}</LinkCustom>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
