import { create } from 'zustand';
import { AppProviderSlice, createAppProviderSlice } from './slices/app';

export const useAppProviderStore = create<AppProviderSlice>(createAppProviderSlice);
