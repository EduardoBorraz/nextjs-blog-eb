import Comments from "@/components/Comments";
import Posts from "../page";
import { Suspense } from "react";
import Image from "next/image";

const postById = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const getComments = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await res.json();
  return data;
};

async function Post({ params }) {
  const post = await postById({ id: params.postId });
  const comments = await getComments();
  const _comments = comments.filter((comment) => comment.postId === post.id);

  return (
    <div className="container mx-auto my-10 flex justify-center">
      <div className="bg-white rounded-lg shadow w-full md:w-1/2 ">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1692680879374-57b4cd57942d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            className="w-full md:w-[800px] h-full md:h-500px] object-cover rounded-lg"
            width={500}
            height={500}
            alt="post"
          />
        </div>

        <div className=" mt-4 flex flex-col gap-4 p-6">
          <h1 className="uppercase text-center text-3xl font-bold">
            {post.id}. {post.title}
          </h1>
          <p className="font-extralight">{post.body}</p>
          <hr />
          <h2 className="font-extralight">Comments</h2>
          <h1 className="font-bold font-md">{_comments.length} Comment(s)</h1>
          <hr className="border-b-2 border-grey-900" />
          <Comments comments={_comments} />
        </div>
      </div>

      {/* <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Posts />
      </Suspense> */}
    </div>
  );
}

export default Post;
