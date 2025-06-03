'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import {
  Menu as HeadlessMenu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';

export interface DropdownMenuItem {
  href: string;
  label: string;
  desc?: string;
}

export interface DropdownMenuProps {
  label: string;
  items: DropdownMenuItem[];
  t: (key: string) => string;
}

export default function DropdownMenu({ label, items, t }: DropdownMenuProps) {
  return (
    <HeadlessMenu as="div" className="relative">
      <MenuButton className="btn-ghost flex items-center">
        {label}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform ui-open:rotate-180" />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute z-20 mt-2 w-72 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden focus:outline-none">
          <div className="py-2">
            {items.map(({ href, label: key, desc }) => (
              <MenuItem key={href}>
                {({ active }) => (
                  <Link
                    href={href}
                    className={`block px-6 py-4 transition-colors ${
                      active ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                    }`}
                  >
                    <div className="font-medium">{t(key)}</div>
                    {desc && <p className="text-xs text-gray-500 mt-1">{desc}</p>}
                  </Link>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </HeadlessMenu>
  );
}
