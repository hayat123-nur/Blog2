import BlogCard from "../components/BlogCard";
import { Button } from "@/components/ui/button";


const Home = () => {
  return (
    <div>
      <div className="relative ">
        <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        <img
          src="/o.png"
          alt=""
          className="absolute bottom-4 right-4
                     w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        />
      </div>
      <h2 className="ml-10 ">Related Blog</h2>
      <BlogCard />

      <div className="flex justify-center m-10">
        <Button>Show more</Button>
      </div>
    </div>
  );
};

export default Home;
