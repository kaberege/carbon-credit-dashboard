import { useParams, Link } from 'react-router-dom';
import { useDashboardStore } from '../store/useStore';
import { BiLeftArrowAlt } from 'react-icons/bi';

// Component for displaying a single project based on project unique id
const SingleCreditView: React.FC = () => {
    const { id } = useParams();
    const { projects } = useDashboardStore();
    const project = projects.find(p => p.token_id === id);

    if (!project) return (
        <div className='flex flex-col gap-4'>
            <Link
                to="/"
                className="text-blue-600 flex items-center justify-center hover:underline py-1 bg-teal-100 
                 hover:bg-teal-200 w-28 rounded-md transition-all shadow shadow-teal-700"
            >
                < BiLeftArrowAlt size={20} className="mr-1 font-bold" /> Back to list
            </Link>
            <p className="text-center text-red-500 font-medium text-base">Project not found.</p>
        </div>
    )

    return (
        <div className="flex flex-col gap-6">
            <Link to="/" className="text-blue-600 flex items-center hover:underline">
                < BiLeftArrowAlt size={20} className="mr-1 font-bold" />  Back to list
            </Link>
            <div
                className='w-full max-w-xl mx-auto bg-teal-200 hover:bg-teal-400 rounded-md p-2 cursor-pointer hover:scale-105
                transition-all'>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{project.project_name}</h1>
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Certification:</strong> {project.certification}</p>
                <p><strong>CO₂ Offset:</strong> {project.co2_offset_tonnes} tonnes</p>
                <p><strong>Price per Ton:</strong> ${project.price_per_ton}</p>
                <p><strong>Type:</strong> {project.project_type}</p>
                <p><strong>Impact Summary:</strong> {project.impact_summary}</p>
            </div>
        </div>
    );
}

export default SingleCreditView;