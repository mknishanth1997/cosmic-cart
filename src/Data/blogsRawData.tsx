export const blogs = {
  earth: { title: "Blog About Earth" },
  mars: { title: "Blog about Mars" },
};

export function extractBlogsKeys() {
  return Object.keys(blogs);
}
