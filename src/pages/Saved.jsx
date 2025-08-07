import { useAtom } from "jotai";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import BlogCard from "../components/BlogCard"; // This is your preview card component

const Bookmarks = () => {
  const [bookmarked] = useAtom(bookmarkAtom);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Bookmarked Blogs</h1>

      {bookmarked.length === 0 ? (
        <p className="text-muted-foreground text-center">No bookmarks yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {bookmarked.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
