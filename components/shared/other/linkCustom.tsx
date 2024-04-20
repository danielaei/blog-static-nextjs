'use client';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
export const LinkCustom = ({
  children,
  pathActive,
  ...props
}: {
  children: React.ReactNode;
  pathActive: string;
} & LinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${pathname === pathActive ? 'active' : ''}`}
      prefetch={false}
      {...props}
    >
      {children}
    </Link>
  );
};
