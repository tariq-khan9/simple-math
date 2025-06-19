import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { ChevronDown } from "lucide-react"; // optional icon

const UserMenu = () => {
  const { user, logoutUser } = useAuth();
  const [last, setLast] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (user?.username) {
      const parts = user.username.split(" ");
      const lastName = parts[parts.length - 1];
      setLast(lastName);
    }
  }, [user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {user ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="border border-gray-800 hover:bg-gray-700 text-black hover:text-white px-2 md:pl-4 py-[6px]  text-[13px] flex items-center gap-1"
          >
            {last} <ChevronDown size={16} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Progress
              </button>
              <button
                onClick={() => {
                  navigate("/profile");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  logoutUser();
                  navigate("/");
                  setOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="border border-gray-800 hover:bg-gray-700 text-black hover:text-white px-4 md:px-6 py-[6px]  text-[13px] flex items-center "
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserMenu;
