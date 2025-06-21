import { useEffect } from 'react';
import { useDashboardStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { type CarbonOffsetProjectProps } from '../interfaces';
import { carbonOffsetProjects } from '../constants';
import FilterProject from './FilterProject';
import SearchProject from './SearchProject';

// Component for displaying carbon project cards in  a grid format
const CreditListing: React.FC = () => {
    const { sortedProjects, setProjects } = useDashboardStore();

    useEffect(() => {
        setProjects(carbonOffsetProjects);
    }, []);


    return (
        <div>
            <h1 className="text-zinc-950 text-xl sm:text-3xl font-bold mb-6">EcoLedger Carbon Credits</h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <SearchProject />
                <FilterProject />
            </div>

            {sortedProjects.length === 0 ? (
                <p className="text-center text-red-500 font-medium text-base">No matching projects found.</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {sortedProjects.map((p: CarbonOffsetProjectProps) => (
                        <Link
                            key={p.token_id}
                            to={`/details/${p.token_id}`}
                            className="block border rounded-lg p-4 shadow hover:shadow-lg hover:shadow-teal-800 transition bg-teal-100
                            hover:scale-105"
                        >
                            <h2 className="text-zinc-800 text-[18px] sm:text-xl font-semibold mb-2">{p.project_name}</h2>
                            <p className='flex items-center text-zinc-950 text-sm'>{p.location}
                                <i className='ml-2 text-blue-900'><span className='text-zinc-950 font-medium'>-</span>{p.certification}</i>
                            </p>
                            <p className="text-zinc-600 text-sm">{p.project_type}</p>
                            <p className=" text-zinc-950 text-sm mt-2">CO₂ Offset: <strong>{p.co2_offset_tonnes}t</strong></p>
                            <p className=' text-zinc-950 text-sm'>Price: <strong>${p.price_per_ton}/ton</strong></p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CreditListing;