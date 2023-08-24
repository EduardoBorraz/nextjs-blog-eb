import PostCard from "@/components/PostCard";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

async function Posts() {
  const posts = await getPosts();
  const users = await getUsers();

  return (
    <div className="container mx-auto my-10 px-10 grid grid-cols-3 gap-4">
      {posts.map((post) => {
        const userPost = users.find((item) => item.id === post.userId);
        const _post = { ...post, ...userPost, postId: post.id };
        return <PostCard post={_post} key={post.id} />;
      })}
    </div>
  );
}

export default Posts;
