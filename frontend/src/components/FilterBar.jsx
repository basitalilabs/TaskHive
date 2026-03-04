const FilterBar = ({ filters, onFilterChange }) => {
    return (
        <div className="flex gap-3 mb-6">
            {['all', 'pending', 'complete'].map((f) => (
                <button
                    key={f}
                    onClick={() => onFilterChange(f)}
                    className={`px-4 py-2 rounded-lg capitalize font-medium ${
                        filters === f
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                >
                    {f}
                </button>
            ))}
        </div>
    )
}
export default FilterBar;