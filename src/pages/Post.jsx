import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPost } from "../lib/posts";

export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <p>Post not found. <Link to="/">Go home</Link></p>;

  return (
    <article className="markdown-body">
      <h2 style={{ marginTop: 0 }}>{post.title}</h2>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
      >
        {post.content}
      </ReactMarkdown>
      <p style={{ marginTop: 32 }}><Link to="/">← Back to Posts</Link></p>
    </article>
  );
}
