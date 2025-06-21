import { create } from 'zustand';
import { type DashboardState } from '../interfaces';

// Handles global state management with zustand
export const useDashboardStore = create<DashboardState>((set) => ({
    projects: [],
    sortedProjects: [],
    search: '',
    filter: '',
    setProjects: (p) => set({ projects: p }),
    setSortedProjectsByFilter: () => set(state => {
        const filtered = state.filter === "" ? state.projects : state.projects.filter(p => p.project_type.toLowerCase().includes(state.filter.toLowerCase()));
        return { sortedProjects: filtered }
    }),
    setSortedProjectsBySearch: () => set(state => {
        const filtered = state.search === "" ? state.projects : state.projects.filter(p => p.project_type.toLowerCase().includes(state.search.toLowerCase()));
        return { sortedProjects: filtered }
    }),
    setSearch: (value) => set({ search: value }),
    setFilter: (value) => set({ filter: value }),
}));