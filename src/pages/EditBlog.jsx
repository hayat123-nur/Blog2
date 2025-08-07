import { Button } from "@/components/ui/button";
import { FaEdit, FaTrash, FaBookmark } from "react-icons/fa";

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
import { useState } from "react";

export function EditBlogDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
                  <FaEdit className="text-black" />
                </button>
        
      </DialogTrigger>

      <DialogContent className="bg-white max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-xl px-6 py-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Edit your Post
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          {/* Author and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                placeholder="Emily Carter"
                className="bg-white border border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                className="bg-white border border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profile">Profile Link</Label>
            <Input
              id="profile"
              placeholder="https://www.example.com"
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Title"
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Description"
              className="bg-white border border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
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
            onClick={() => {
              setOpen(false);
            }}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
