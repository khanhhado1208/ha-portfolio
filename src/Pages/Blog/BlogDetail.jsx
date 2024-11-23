import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "./blogsData";
import "./BlogDetail.css";

export const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find((item) => item.id === id);

  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (blog?.htmlPath) {
      // Fetch contents TML from file
      fetch(blog.htmlPath)
        .then((response) => response.text())
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
      <div className="blog-content">
        {/* Show content from Html path */}
        {blog.htmlPath ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        )}
      </div>

      {/* Show download file lists */}
      {blog.fileDownloads && (
        <div className="download-section">
          <h3>Available Files for Download:</h3>
          <ul>
            {blog.fileDownloads.map((file, index) => (
              <li key={index}>
                <a href={file.filePath} download={file.fileName} className="download-link">
                  {file.fileName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
