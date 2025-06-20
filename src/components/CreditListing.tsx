import { useDashboardStore } from '../store/useStore';
import { Link } from 'react-router-dom';
import { BiSearch, BiFilter } from 'react-icons/bi';

function CreditListing() {
    const { projects, search, filter, setSearch, setFilter } = useDashboardStore();

    const filtered = projects.filter(p => {
        return (
            p.project_type.toLowerCase().includes(search.toLowerCase()) &&
            (filter === '' || p.project_type === filter)
        );
    });

    const uniqueTypes = [...new Set(projects.map(p => p.project_type))];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">EcoLedger Carbon Credits</h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border rounded px-3 py-2 w-full sm:w-1/2">
                    <BiSearch className="w-5 h-5 text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search by project type..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full outline-none bg-transparent"
                    />
                </div>
                <div className="flex items-center border rounded px-3 py-2 w-full sm:w-1/2">
                    <BiFilter className="w-5 h-5 text-gray-500 mr-2" />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full bg-transparent outline-none"
                    >
                        <option value="">All Types</option>
                        {uniqueTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            {filtered.length === 0 ? (
                <p className="text-center text-gray-500">No matching projects found.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {filtered.map((p) => (
                        <Link
                            key={p.token_id}
                            to={`/details/${p.token_id}`}
                            className="block border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
                        >
                            <h2 className="text-xl font-semibold">{p.project_name}</h2>
                            <p>{p.location} • {p.certification}</p>
                            <p className="text-sm text-gray-600">{p.project_type}</p>
                            <p className="mt-2 font-medium">CO₂ Offset: {p.co2_offset_tonnes}t</p>
                            <p>Price: ${p.price_per_ton}/ton</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CreditListing;