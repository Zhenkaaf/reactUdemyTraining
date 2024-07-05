import React from "react";

export function Post(props) {
  const { name } = props;

  return (
    <h2>
      {name}{" "}
      <button onClick={() => props.removePost(props.postId)}>delete</button>
    </h2>
  );
}
