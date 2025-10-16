import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./styles/markdown.css";


export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 16, fontFamily: "system-ui, Helvetica, Arial, sans-serif" }}>
      <header
        style={{
          marginBottom: 50,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: 16,
          padding: "30px 28px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
        }}>
        <Link to="/" style={{
                              textDecoration: "none",
                              color: "#111827",
                              fontWeight: 700,
                              fontSize: "1.25rem",
                            }}>
          My Blog
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Routes>
    </div>
  );
}