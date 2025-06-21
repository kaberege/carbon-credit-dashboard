import { useDashboardStore } from '../store/useStore';
import { BiSearch } from 'react-icons/bi';
import { useEffect } from 'react';

// Search bar component for handling random text inputs based on project types
const SearchProject: React.FC = () => {
    const { search, setSearch, setSortedProjectsBySearch } = useDashboardStore();

    useEffect(() => {
        setSortedProjectsBySearch();
    }, [search]);

    return (
        <div className="flex items-center border-2 border-teal-800 rounded px-2 sm:px-3 py-1 sm:py-2 w-full sm:w-1/2">
            <BiSearch className="w-5 h-5 text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search by project type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none bg-transparent"
            />
        </div>
    )
}

export default SearchProject