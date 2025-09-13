"use client";
import { title } from "process";
import React from "react";
import { blogs } from "@/Data/blogsRawData";

export default function Blog({ params }) {
  const { id } = React.use(params);
  const blog = blogs[id] || {
    title: "Not Found",
  };
  return (
    <div>
      <h1>{blog.title}</h1>
    </div>
  );
}
