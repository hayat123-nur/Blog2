import { PostBlogDialog } from "./PostBlog";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full text-black py-3 px-10 sticky top-0 z-50 bg-white  rounded-sm shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold font-sans ">Blog</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-md"
                : "text-black hover:text-gray-600 px-4 py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-md"
                : "text-black hover:text-gray-600 px-4 py-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/saved"
            end
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-md"
                : "text-black hover:text-gray-600 px-4 py-2"
            }
          >
            Saved
          </NavLink>
        </div>

        <div className="flex-shrink-0">
          <PostBlogDialog />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
