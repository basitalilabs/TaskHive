import { useState } from 'react';

const EditModal = ({ task, onSave, onClose }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
                <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task title"
                    className="border rounded-lg p-2 w-full mb-3"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description (optional)"
                    className="border rounded-lg p-2 w-full mb-3"
                />
                <div className="flex gap-2">
                    <button
                        onClick={() => onSave(task._id, { title, description })}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 flex-1"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EditModal;