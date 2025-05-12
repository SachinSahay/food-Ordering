
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-3">Categories</h2>
      <ScrollArea className="w-full whitespace-nowrap pb-3">
        <div className="flex space-x-4 py-1">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/search?category=${encodeURIComponent(category.name)}`}
              className="flex flex-col items-center space-y-2"
            >
              <div className="h-20 w-20 overflow-hidden rounded-full bg-muted">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryList;
