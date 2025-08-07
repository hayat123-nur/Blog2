import React from "react";
import { useParams } from "react-router-dom";
import { FaEdit, FaTrash, FaBookmark } from "react-icons/fa";
import { blogData } from "../data/constant";
import { EditBlogDialog } from "./EditBlog";
import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id.toString() === id);

  const [bookmarked, setBookmarked] = useAtom(bookmarkAtom);

  if (!blog) return <p className="p-6 text-center">Blog not found.</p>;

  const isBookmarked = bookmarked.some((b) => b.id === blog.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarked(bookmarked.filter((b) => b.id !== blog.id));
    } else {
      setBookmarked([...bookmarked, blog]); // ✅ Only add the selected blog
    }
  };

  return (
    <article className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto space-y-6">
      {/* Author & date */}
      <header className="grid grid-cols-1 sm:grid-cols-[auto,1fr,auto] gap-y-4 sm:gap-y-0 sm:gap-x-4 items-center">
        <img
          src={blog.images}
          alt={blog.author}
          className="w-24 h-24 sm:w-16 sm:h-16 object-cover rounded-full mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left space-y-1">
          <p className="font-semibold text-lg sm:text-base">{blog.author}</p>
          <time className="text-gray-500 text-sm">
            {new Date(blog.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <div className="flex justify-center sm:justify-end space-x-3">
          <EditBlogDialog />
          <button
            onClick={toggleBookmark}
            aria-label="Bookmark"
            className={`p-2 sm:p-3 rounded-full shadow focus:outline-none transition ${
              isBookmarked ? "bg-yellow-400" : "bg-white hover:bg-gray-100"
            }`}
          >
            <FaBookmark
              className={`text-lg sm:text-base ${
                isBookmarked ? "text-white" : "text-black"
              }`}
            />
          </button>
          <button
            aria-label="Delete"
            className="p-2 sm:p-3 bg-white rounded-full shadow hover:bg-gray-100 focus:outline-none"
          >
            <FaTrash className="text-black text-lg sm:text-base" />
          </button>
        </div>
      </header>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
        {blog.title}
      </h1>

      {/* Featured Image */}
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto sm:h-64 md:h-80 object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="prose prose-sm sm:prose lg:prose-lg mx-auto">
        <p>{blog.content}</p>
      </div>
    </article>
  );
};

export default BlogDetails;