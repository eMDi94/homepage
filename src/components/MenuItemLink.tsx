import type { ReactNode } from 'react';

export type MenuItemLinkT = 
  { type: 'link', href: string, target?: string, icon?: ReactNode, label: string }
  | { type: 'moveToLink', elementId: string, icon?: ReactNode, label: string }
  | { type: 'dropdownLinks', label: string, icon?: ReactNode, items: MenuItemLinkT[] }