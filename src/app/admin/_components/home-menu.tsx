'use client';
import React, { useContext } from 'react';
import { ADMIN_HOME } from '@/app/_libs/site-navigation';
import Link from 'next/link';
import { AppContext } from '../context/provider';
import { SET_ACTIVE_TAB } from '../context/reducer';
import { AdminPages } from '@/app/_libs/enums';

export const HomeMenu = () => {
  const { dispatch, state } = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: SET_ACTIVE_TAB, payload: AdminPages.Home });
  };
  return (
    <div className="flex md:ml-20 ml-8">
      <Link
        href={ADMIN_HOME.href}
        className={`font-bold text-2xl ${
          state.activeTab === AdminPages.Home && 'text-green-400'
        }`}
        onClick={handleClick}
      >
        Christopher
      </Link>
    </div>
  );
};
