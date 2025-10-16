// 
// configModules
// 
const configModules = import.meta.glob("/posts/*/config.json", {
  eager: true,
  import: "default",
});

// 
// mdModules
// 
const mdModules = import.meta.glob("/posts/*/index.md", {
  eager: true,
  query: "?raw",
  import: "default",
});
const assetModules = import.meta.glob("/posts/*/*.{png,jpg,jpeg,gif,svg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

// function
// getSlugFromPath
// 
function getSlugFromPath(path) {
  const match = path.match(/^\/posts\/([^/]+)\//);
  return match ? match[1] : null;
}



const assetsBySlug = {};
for (const path in assetModules) {
  const slug = getSlugFromPath(path);
  if (!slug) continue;
  const name = path.split("/").pop();
  (assetsBySlug[slug] ||= {})[name] = assetModules[path];
}

const posts = [];
for (const path in configModules) {
  const slug = getSlugFromPath(path);
  if (!slug) continue;
  const cfg = configModules[path] || {};
  const raw = mdModules[`/posts/${slug}/index.md`];
  if (!raw) continue;
  posts.push({ slug, title: cfg.title || slug, summary: cfg.summary || "" });
}
posts.sort((a, b) => a.title.localeCompare(b.title));

export function getAllPosts() { return posts; }

function rewriteImageLinks(slug, md) {
  return md.replace(/!\[[^\]]*\]\((?!https?:\/\/)([^)]+)\)/g, (m, rel) => {
    const clean = rel.replace(/^.\//, "");
    const url = assetsBySlug[slug]?.[clean];
    return url ? m.replace(rel, url) : m;
  });
}

export function getPost(slug) {
  const config = configModules[`/posts/${slug}/config.json`] || {};
  const RawMarkdown = mdModules[`/posts/${slug}/index.md`];
  if (!config || !RawMarkdown) return null;
  return { slug, title: config.title || slug, summary: config.summary || "", content: rewriteImageLinks(slug, RawMarkdown) };
}