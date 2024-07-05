import React from "react";
import { Post } from "./Post";

export function Posts(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          removePost={props.removePost}
          postId={post.id}
        />
      ))}
    </div>
  );
}
