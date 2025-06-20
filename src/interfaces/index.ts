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

export interface DashboardState {
    projects: CarbonOffsetProjectProps[];
    search: string;
    filter: string;
    setSearch: (value: string) => void;
    setFilter: (value: string) => void;
}