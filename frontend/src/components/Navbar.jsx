const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">TaskHive</h1>
            <div className="flex items-center gap-4">
                <span className="text-gray-600 font-bold">Hello, {user?.name}</span>
                <button
                    onClick={onLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}
export default Navbar;