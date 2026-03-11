import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descError, setDescError] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = async () => {
        setTitleError('');
        setDescError('');

        if(title.trim().length === 0){
            setTitleError('Title is required');
            return;
        }
        if(title.trim().length < 3){
            setTitleError('Title must be at least 3 characters');
            return;
        }
        if(description.length > 150){
            setDescError('Description cannot exceed 150 characters');
            return;
        }

        await onAdd({ title, description, dueDate: dueDate || null, priority });
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('medium');
    }

    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 border border-gray-100">
            
            {/* Form Header */}
            <h2 className="text-lg font-bold text-gray-800 mb-5">
                ✏️ Add New Task
            </h2>

            {/* Title */}
            <div className="mb-3">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        if(e.target.value.length >= 3) setTitleError('');
                    }}
                    placeholder="Task title (min 3 chars)"
                    className={`border rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 text-sm ${
                        titleError 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-gray-200 focus:ring-blue-200'
                    }`}
                />
                {titleError && (
                    <p className="text-red-500 text-xs mt-1">⚠️ {titleError}</p>
                )}
            </div>

            {/* Description */}
            <div className="mb-3">
                <textarea
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                        if(e.target.value.length <= 150) setDescError('');
                    }}
                    placeholder="Description (optional)"
                    rows={2}
                    className={`border rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 resize-none text-sm ${
                        descError 
                        ? 'border-red-400 focus:ring-red-200' 
                        : 'border-gray-200 focus:ring-blue-200'
                    }`}
                />
                <div className="flex justify-between items-center mt-1">
                    {descError ? (
                        <p className="text-red-500 text-xs">⚠️ {descError}</p>
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

            {/* Due Date and Priority in same row - stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                
                {/* Due Date */}
                <div className="flex-1">
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="border border-gray-200 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm text-gray-500"
                    />
                </div>

                {/* Priority */}
                <div className="flex-1">
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="border border-gray-200 rounded-lg p-2.5 w-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm text-gray-500"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 w-full font-semibold text-sm transition-colors duration-200"
            >
                + Add Task
            </button>
        </div>
    )
}

export default TaskForm;