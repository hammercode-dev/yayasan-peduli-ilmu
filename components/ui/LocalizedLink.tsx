'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type LocalizedLinkProps = ComponentProps<typeof Link> & {
  withActive?: boolean;
};

export default function LocalizedLink({
  href,
  className = '',
  withActive,
  ...rest
}: LocalizedLinkProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = withActive && pathname === href;

  const activeLink = 'font-semibold text-primary';
  const styleLink = withActive
    ? cn(className, isActive ? activeLink : '')
    : className;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={styleLink}
      href={href}
      {...rest}
    />
  );
}
