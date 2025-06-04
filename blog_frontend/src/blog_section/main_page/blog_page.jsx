import React, { useEffect, useState } from "react";
import axios from "axios";
import "./blog_page.css"
function Blog_page() {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const response = await fetch('http://10.0.0.51:8000/api/posts/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });

        if (response.ok) {
        setFormData({ title: '', author: '', content: '' });
        window.location.href="/blog"
        } else {
        alert('Error posting blog');
        }
    };
    return(
        <div id="form_view">
      <h1>Publish Your Blogs</h1>
      <form onSubmit={handleSubmit}>
        <div className="rows_data">
          <input
            type="text"
            name="title"
            placeholder="Write Your Title Here"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="rows_data">
          <textarea
            name="content"
            placeholder="Write Your Content Here"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
    );
};

export default Blog_page;
