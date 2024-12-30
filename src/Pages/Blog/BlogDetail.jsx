import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "./blogsData";
import "./BlogDetail.css";

export const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find((item) => item.id === id);

  const [htmlContent, setHtmlContent] = useState("");

  // Fetch blog HTML content
  useEffect(() => {
    if (blog?.htmlPath) {
      fetch(blog.htmlPath)
        .then((response) => {
          if (!response.ok) throw new Error("Failed to load HTML content");
          return response.text();
        })
        .then((data) => setHtmlContent(data))
        .catch((error) => console.error("Error loading HTML file:", error));
    }
  }, [blog?.htmlPath]);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>

      {/* Blog Content Section */}
      <div className="blog-content">
        {blog.htmlPath ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: blog.content || "No content available." }} />
        )}
      </div>

      {/* Download Files Section */}
      {blog.fileDownloads?.length > 0 && (
        <div className="download-section">
          <h3>Available Files for Download:</h3>
          <ul>
            {blog.fileDownloads.map((file, index) => (
              <li key={index}>
                <a
                  href={file.filePath}
                  download={file.fileName}
                  className="download-link"
                >
                  📥 {file.fileName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Source Code Section */}
      {blog.sourceCode?.length > 0 && (
        <div className="source-code-section">
          <h3>Source Code:</h3>
          <ul>
            {blog.sourceCode.map((source, index) => (
              <li key={index}>
                <a
                  href={source.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-code-link"
                >
                  💻 {source.fileName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
