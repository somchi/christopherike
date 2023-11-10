'use client';

import { AppStore } from '@/app/_libs/types';
import { createContext, useReducer } from 'react';
import { appReducer } from './reducer';
import { AdminPages } from '@/app/_libs/enums';

export const INITIAL_STATE: AppStore = {
  activeTab: AdminPages.Home,
};

export const AppContext = createContext<{
  state: AppStore;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
