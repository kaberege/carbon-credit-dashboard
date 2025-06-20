import { useParams, Link } from 'react-router-dom';
import { useDashboardStore } from '../store/useStore';
import { BiArrowToLeft } from 'react-icons/bi';

function SingleCreditView() {
    const { id } = useParams();
    const { projects } = useDashboardStore();
    const project = projects.find(p => p.token_id === id);

    if (!project) return <p>Project not found.</p>;

    return (
        <div className="space-y-4">
            <Link to="/" className="text-blue-600 flex items-center hover:underline">
                <BiArrowToLeft className="w-4 h-4 mr-1" /> Back to list
            </Link>
            <h1 className="text-3xl font-bold">{project.project_name}</h1>
            <p><strong>Location:</strong> {project.location}</p>
            <p><strong>Certification:</strong> {project.certification}</p>
            <p><strong>CO₂ Offset:</strong> {project.co2_offset_tonnes} tonnes</p>
            <p><strong>Price per Ton:</strong> ${project.price_per_ton}</p>
            <p><strong>Type:</strong> {project.project_type}</p>
            <p><strong>Impact Summary:</strong> {project.impact_summary}</p>
        </div>
    );
}

export default SingleCreditView;