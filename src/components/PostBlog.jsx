import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PostBlogDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    author: "",
    date: "",
    profile: "",
    title: "",
    description: "",
    content: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePost = () => {
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("savedBlogs")) || [];
    localStorage.setItem("savedBlogs", JSON.stringify([...existing, formData]));

    // Clear form and close dialog
    setFormData({
      author: "",
      date: "",
      profile: "",
      title: "",
      description: "",
      content: "",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-black text-white hover:bg-red-950 hover:text-white"
          variant="outline"
        >
          Post a Blog
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-xl px-6 py-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Post a Blog
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="author">Full Name</Label>
              <Input
                id="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-white border border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-white border border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile">Profile Link</Label>
            <Input
              id="profile"
              value={formData.profile}
              onChange={handleChange}
              placeholder="https://www.example.com"
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your blog content here..."
              className="min-h-[200px] bg-white border border-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            className="border-red-700 bg-red-700 text-white hover:bg-gray-100 hover:text-black px-6"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            className="bg-black text-white hover:bg-gray-900 px-6"
            onClick={handlePost}
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
