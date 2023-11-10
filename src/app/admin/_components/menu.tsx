'use client';
import React, { useContext } from 'react';
import {
  ADD_SERVICE,
  ADD_USER,
  CLEINT_REVIEW,
  DESIGN,
  SKILLS,
  VIDEO,
} from '@/app/_libs/site-navigation';
import { Separator } from '@/app/components/separetor';
import Link from 'next/link';
import { AppContext } from '../context/provider';
import { AdminPages } from '@/app/_libs/enums';
import { SET_ACTIVE_TAB } from '../context/reducer';

export const AdminMenu = () => {
  const { dispatch, state } = useContext(AppContext);

  const handleClick = (nav: string) => {
    dispatch({ type: SET_ACTIVE_TAB, payload: nav });
  };

  return (
    <div className="grid md:flex items-center md:gap-10 gap-2 font-medium text-lg">
      <Link
        href={ADD_SERVICE.href}
        className={`${
          state.activeTab === AdminPages.Service && 'text-green-400'
        }`}
        onClick={() => handleClick(AdminPages.Service)}
      >
        Add Service
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        className={`${
          state.activeTab === AdminPages.Skill && 'text-green-400'
        }`}
        href={SKILLS.href}
        onClick={() => handleClick(AdminPages.Skill)}
      >
        Add Skill
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        className={`${
          state.activeTab === AdminPages.Design && 'text-green-400'
        }`}
        href={DESIGN.href}
        onClick={() => handleClick(AdminPages.Design)}
      >
        Add Design
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        className={`${
          state.activeTab === AdminPages.Video && 'text-green-400'
        }`}
        href={VIDEO.href}
        onClick={() => handleClick(AdminPages.Video)}
      >
        Add Video
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        href={CLEINT_REVIEW.href}
        onClick={() => handleClick(AdminPages.Review)}
        className={`${
          state.activeTab === AdminPages.Review && 'text-green-400'
        }`}
      >
        Add Review
      </Link>
      <Separator className="md:hidden !bg-slate-700" />
      <Link
        className={`${state.activeTab === AdminPages.User && 'text-green-400'}`}
        href={ADD_USER.href}
        onClick={() => handleClick(AdminPages.User)}
      >
        Add User
      </Link>
    </div>
  );
};
