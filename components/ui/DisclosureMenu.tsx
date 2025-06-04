import React from 'react';
import { Link } from '@/i18n/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface DisclosureMenuItem {
  href: string;
  label: string;
}

interface DisclosureMenuProps {
  label: string;
  items: DisclosureMenuItem[];
  t: (key: string) => string;
}

function DisclosureMenu({ label, items, t }: DisclosureMenuProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <DisclosureButton className="flex justify-between w-full px-3 py-2 btn-ghost text-left hover:text-primary-600 hover:bg-gray-50 duration-300">
            <span>{label}</span>
            <ChevronDown
              className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
            />
          </DisclosureButton>
          <DisclosurePanel className="px-6 pb-2 space-y-1">
            {items.map(({ href, label: key }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}
export default DisclosureMenu;
