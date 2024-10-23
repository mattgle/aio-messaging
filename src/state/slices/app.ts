import { StateCreator } from 'zustand';
import { App, MOCKED_APPS } from '@/constants/apps';

const initialApp = MOCKED_APPS[0];

export interface AppProviderSlice {
  selectedApp: App;
  changeSelectedApp: (app: App) => void;
}

export const createAppProviderSlice: StateCreator<AppProviderSlice, [], [], AppProviderSlice> = (set) => ({
  selectedApp: initialApp,
  changeSelectedApp: (app: App) => set(() => ({ selectedApp: app }))
});
