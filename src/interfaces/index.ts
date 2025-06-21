// Types for Carbon Offset Projects
export interface CarbonOffsetProjectProps {
    project_name: string;
    token_id: string;
    location: string;
    certification: "Verra" | "Gold Standard";
    co2_offset_tonnes: number;
    price_per_ton: number;
    project_type: "Reforestation" | "Direct Air Capture" | "Clean Cookstoves" | "Solar Energy" | "Ocean Capture";
    impact_summary: string;
}

// Types for Carbon Offset Project's store global states management 
export interface DashboardState {
    projects: CarbonOffsetProjectProps[];
    sortedProjects: CarbonOffsetProjectProps[];
    search: string;
    filter: string;
    setProjects: (p: CarbonOffsetProjectProps[]) => void;
    setSortedProjectsByFilter: () => void;
    setSortedProjectsBySearch: () => void;
    setSearch: (value: string) => void;
    setFilter: (value: string) => void;
}

