import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "./blogsData";
import "./Blog.css";

export const Blog = () => {
  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      <div className="blog-list">
        {blogsData.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={blog.thumbnail} alt={blog.title} className="blog-thumbnail" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <p className="blog-date">{blog.date}</p>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
