const Navbar = ({ user, onLogout }) => {
    return (
        <nav className="bg-white shadow-md px-4 sm:px-6 py-4 flex justify-between items-center sticky top-0 z-10">
            
            {/* Logo */}
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600 cursor-pointer">
                TaskHive 🐝
            </h1>

            {/* Right side */}
            <div className="flex items-center gap-2 sm:gap-4">
                
                {/* Name - hidden on very small screens */}
                <span className="text-gray-600 font-bold text-sm sm:text-base hidden sm:block">
                    Hello, {user?.name}
                </span>

                {/* Name initials on mobile */}
                <div className="sm:hidden w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {user?.name?.charAt(0).toUpperCase()}
                </div>

                {/* Logout button */}
                <button
                    onClick={onLogout}
                    className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 text-sm font-medium"
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}
export default Navbar;