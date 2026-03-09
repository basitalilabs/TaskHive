const TaskCard = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
        <div className="flex gap-4 mt-2 items-center">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              task.status === "complete"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }`}
          >
            {task.status}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              task.priority === "high"
                ? "bg-red-100 text-red-600"
                : task.priority === "medium"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
            }`}
          >
            {task.priority}
          </span>
          {task.dueDate && (
            <span className="text-xs text-gray-400">
              📅{" "}
              {new Date(task.dueDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onToggle(task._id, task.status)}
          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 cursor-pointer"
        >
          {task.status === "pending" ? "complete" : "Undo"}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TaskCard;
