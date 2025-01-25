
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "./blogsData";
import "./Blog.css";

export const Blog = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  const handleHover = (id) => {
    setActiveBlog(id);
  };

  return (
    <div className="blog-container">
      <h2>My Blog</h2>
      <h3>
        Welcome to my blog! Here, I share reports and insights from my studies
        in data analysis, along with other topics I find interesting. Stay
        tuned for updates!
      </h3>
      <p className="note">
        Some of my reports, like those written in R or Jupyter Lab, are
        better suited for this blog format instead of the Projects section.
      </p>
      <div className="blog-list">
        {blogsData.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className={`blog-item ${activeBlog === blog.id ? "active" : ""}`}
            onMouseEnter={() => handleHover(blog.id)}
            onMouseLeave={() => setActiveBlog(null)}
          >
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="blog-thumbnail"
            />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <p className="blog-date">{blog.date}</p>
              <span className="read-more">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
