import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";


export default function Home() {
const posts = getAllPosts();


return (
<main>
<h2 style={{ marginTop: 0 }}>Posts</h2>
<ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 16 }}>
{posts.map((p) => (
<li key={p.slug} style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
<Link to={`/post/${p.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
<h3 style={{ marginTop: 0, marginBottom: 8 }}>{p.title}</h3>
<p style={{ margin: 0, color: "#4b5563" }}>{p.summary}</p>
</Link>
</li>
))}
</ul>
</main>
);
}