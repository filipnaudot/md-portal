import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./styles/markdown.css";


export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 16, fontFamily: "system-ui, Helvetica, Arial, sans-serif" }}>
      <header style={{ marginBottom: 24 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ margin: 0 }}>My Blog</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}