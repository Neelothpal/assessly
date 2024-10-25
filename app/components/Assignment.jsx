export default function Assignment({ title, description }) {
    return (
        <div className="p-4 mb-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
        </div>
    );
}
