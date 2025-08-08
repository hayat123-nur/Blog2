import { NavLink } from "react-router-dom";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <NavLink
      to={`/blog/${blog.id}`}
      className={({ isActive }) =>
        isActive
          ? "bg-black text-white rounded-xl block"
          : "text-black hover:text-gray-600 transition-colors block"
      }
    >
      <div className="h-[440px] w-full max-w-sm mx-auto rounded-xl bg-white backdrop-blur shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full object-cover rounded-t-lg"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-semibold mb-1 line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-sm mb-3 line-clamp-3">{blog.description}</p>

          <div className="mt-auto flex items-center justify-between text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <img
                src={blog.images}
                alt={`${blog.author} avatar`}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-lg">{blog.author}</span>
            </div>
            <img src={blog.Dot} alt="Dot" className="w-1 h-1" />
            <span>{new Date(blog.createdAt).toDateString()}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BlogCard;
