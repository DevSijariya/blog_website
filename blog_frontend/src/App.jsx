import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login.jsx";
import Blog from "./blog_section/main_page/blog.jsx"; 
import Blog_page from "./blog_section/main_page/blog_page.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/page" element={<Blog_page/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
