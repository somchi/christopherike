import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

type Props = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
