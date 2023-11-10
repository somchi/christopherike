import React from 'react';
import { AdminHeader } from '../_components/header';
import { AppProvider } from '../context/provider';

type Props = {
  children: React.ReactNode;
};

export default function AdminAuthLayout({ children }: Props) {
  return (
    <AppProvider>
      <div className="text-gray-300">
        <AdminHeader />
        {children}
      </div>
    </AppProvider>
  );
}
