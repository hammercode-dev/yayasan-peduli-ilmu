import React from 'react';

export const Link = ({ children, href }: any) =>
  React.createElement('a', { href }, children);
export const redirect = () => {};
export const usePathname = () => '/mock-path';
export const useRouter = () => ({ push: () => {} });
export const getPathname = () => '/mock-path';