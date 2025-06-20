import { create } from 'zustand';
import { type DashboardState } from '../interfaces';
import { carbonOffsetProjects } from '../constants';



export const useDashboardStore = create<DashboardState>((set) => ({
    projects: carbonOffsetProjects,
    search: '',
    filter: '',
    setSearch: (value) => set({ search: value }),
    setFilter: (value) => set({ filter: value }),
}));