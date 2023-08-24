"use client";
import Link from "next/link";

const PostCard = ({ post }) => {
  const { title, body, name, postId, website } = post;
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-all w-full">
      <div>
        <img
          src="https://images.unsplash.com/photo-1692680879374-57b4cd57942d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          className="w-full md:w-[500px] h-full md:h-[300px] object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Link
          href={`/posts/${postId}`}
          className="text-2xl font-semibold hover:underline"
        >
          {title}
        </Link>
        <p className="text-gray-600">{body}.</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center justify-center w-10 h-10 bg-slate-200 uppercase text-slate-600 rounded-full font-medium">
            EB
          </span>
          <div>
            <span>{name}</span>
          </div>
        </div>
        <div>
          <p className="uppercase text-gray-600 text-sm">{website}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
