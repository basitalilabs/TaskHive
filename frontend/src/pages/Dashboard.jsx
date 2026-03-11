import { useState, useEffect } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import FilterBar from "../components/FilterBar";
import EditModal from "../components/EditModal";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [filters, setFilters] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tasks?search=${search}`);
      setTasks(response.data);
      setError("");
    } catch (error) {
      setError("Failed to fetch tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleAddTask = async ({ title, description, dueDate, priority }) => {
    try {
      await api.post("/tasks", { title, description, dueDate, priority });
      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add task"); // 👈
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await api.patch(`/tasks/${id}/status`);
    fetchTasks();
  };

  const handleUpdate = async (id, data) => {
    await api.patch(`/tasks/${id}`, data);
    setEditingTask(null);
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) =>
    filters === "all" ? true : task.status === filters,
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} onLogout={handleLogout} />
      <div className="max-w-3xl mx-auto mt-8 px-4 pb-10">
        <TaskForm onAdd={handleAddTask} />

        {/* Search Bar */}
        <SearchBar search={search} onSearch={setSearch} />
        
        {/* Filter Bar */}
        <FilterBar filters={filters} onFilterChange={setFilters} />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            <p className="text-sm">{error}</p>
          </div>
        )}
        <div className="space-y-4">
          {loading ? (
            <div className="flex justify-center mt-10">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredTasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet. Add one above!
            </p>
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onToggle={handleToggle}
                onEdit={setEditingTask}
              />
            ))
          )}
        </div>
      </div>
      {editingTask && (
        <EditModal
          task={editingTask}
          onSave={handleUpdate}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
