import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descError, setDescError] = useState('');

    const handleSubmit = async () => {
        // Reset errors
        setTitleError('');
        setDescError('');

        // Validate title
        if(title.trim().length === 0){
            setTitleError('Title is required');
            return;
        }
        if(title.trim().length < 3){
            setTitleError('Title must be at least 3 characters');
            return;
        }

        // Validate description
        if(description.length > 150){
            setDescError('Description cannot exceed 150 characters');
            return;
        }

        await onAdd({ title, description });
        setTitle('');
        setDescription('');
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
            <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
            
            {/* Title Input */}
            <div className="mb-3">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if(e.target.value.length >= 3) setTitleError('');
                    }}
                    placeholder="Task title (min 3 chars)"
                    className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 ${
                        titleError 
                        ? 'border-red-500 focus:ring-red-300' 
                        : 'border-gray-300 focus:ring-blue-300'
                    }`}
                />
                {titleError && (
                    <p className="text-red-500 text-xs mt-1">{titleError}</p>
                )}
            </div>

            {/* Description Input */}
            <div className="mb-3">
                <textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        if(e.target.value.length <= 150) setDescError('');
                    }}
                    placeholder="Description (optional, max 150 chars)"
                    rows={3}
                    className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 resize-none ${
                        descError 
                        ? 'border-red-500 focus:ring-red-300' 
                        : 'border-gray-300 focus:ring-blue-300'
                    }`}
                />
                <div className="flex justify-between items-center mt-1">
                    {descError ? (
                        <p className="text-red-500 text-xs">{descError}</p>
                    ) : (
                        <span></span>
                    )}
                    <p className={`text-xs ${
                        description.length > 150 
                        ? 'text-red-500 font-medium' 
                        : 'text-gray-400'
                    }`}>
                        {description.length}/150
                    </p>
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full font-medium"
            >
                Add Task
            </button>
        </div>
    )
}

export default TaskForm;
