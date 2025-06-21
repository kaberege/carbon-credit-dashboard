import { BiFilter } from 'react-icons/bi';
import { useDashboardStore } from '../store/useStore';
import { useEffect, useState } from 'react';

// A component for handling filtering based on project types
const FilterProject: React.FC = () => {
    const [unique, setUnique] = useState<string[]>([]);

    const { projects, filter, setFilter, setSortedProjectsByFilter } = useDashboardStore();

    useEffect(() => {
        const uniqueTypes = [...new Set(projects.map(p => p.project_type))];
        setUnique(uniqueTypes);
    }, [projects]);

    useEffect(() => {
        setSortedProjectsByFilter();
    }, [projects, filter]);

    return (
        <div className="flex items-center border-2 border-teal-800 rounded px-2 sm:px-3 py-1 sm:py-2 w-full sm:w-1/2">
            <BiFilter className="w-5 h-5 text-gray-500 mr-2" />
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-transparent outline-none"
            >
                <option value="">All Types</option>
                {
                    unique.length > 0 && (
                        unique.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))
                    )
                }
            </select>
        </div>
    )
}

export default FilterProject;