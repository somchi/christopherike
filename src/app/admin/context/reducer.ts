'use client';
import { AppStore } from '@/app/_libs/types';
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

export const appReducer = (
  state: AppStore,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};
