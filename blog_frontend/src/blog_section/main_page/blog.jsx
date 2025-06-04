import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog.css"

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://10.0.0.51:8000/api/posts/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div id="blog_section">
            <div id="blog_header">
                <div className="content_data">

                <h1>Welcome to Blog Section</h1>
                <ul>
                    <li>
                        Explore insightful articles, tutorials, and stories shared by our community. Stay updated, stay inspired.
                    </li>
                    <li>
                        Whether you're a tech enthusiast, a curious learner, or someone looking to share knowledge, this space is built for you. 
                        We publish blogs on the latest in technology, lifestyle, productivity, and personal development. 
                        Dive into thoughtful content, learn something new every day, and feel free to contribute your own voice.
                    </li>
                    <li>
                        Our mission is to create a space where information meets inspiration. Grab a coffee and enjoy reading!
                    </li>
                </ul>
                <a href="#blog_main_section">Explore</a>
                </div>
            </div>

      <div id="blog_main_section">
        <h1>Blog Posts</h1>
        <div className="blogscard">

      {posts.map(post => (
          <div key={post.id} style={{border: "1px solid #ccc", margin: "10px", padding: "10px"}}>
          <a href="#">{post.author}</a>
          <h2>{post.title}</h2>
          <p className="card_content">{post.content}</p>
          
        </div>
      ))}
      </div>
      <div className="bottom">
        <div className="form_button">
          <a href="/blog/page"> Write Your Blog</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Blog;
