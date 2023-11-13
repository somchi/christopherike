import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return <div className="grid items-center text-gray-300">{children}</div>;
}
