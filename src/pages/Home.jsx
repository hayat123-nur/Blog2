import BlogCard from "../components/BlogCard";
import { blogData } from "../data/constant";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="relative ">
        <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        <img
          src="/o.png"
          alt=""
          className="absolute bottom-4 right-4
                     w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        />
      </div>
      <h1 className="text-2xl p-5">Recent Blog Posts</h1>
      <section className="px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 py-4">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="flex justify-center m-10">
          <Button>Show more</Button>
        </div>
      </section>
    </>
  );
};

export default Home;
