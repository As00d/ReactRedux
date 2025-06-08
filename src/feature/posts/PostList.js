import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
import PostAuthor from "./PostAuthor";

const date = new Date();

let currentDate = `${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`;

export default function PostList() {
  const postData = useSelector((store) => store.post);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const usersList = useSelector((store) => store.user);
  const canSubmit = !title || !content || !userId;

  function handleSubmit() {
    if (!title || !content) return;
    dispatch(addPost({ title, content, id: nanoid(), userId, currentDate }));
    // clearing the values from the post
    setTitle("");
    setContent("");
  }
  return (
    <div>
      <div>
        <h1>Add new posts</h1>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="content">Content </label>
        <input
          type="text"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <br />
        <select
          name=""
          id=""
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="" disabled>
            -- Select a user --
          </option>
          {usersList.map((user) => {
            return (
              <option value={user.name} key={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <button disabled={canSubmit} onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
      <div>
        <h2>Posts</h2>
        {postData.map((data) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.content}</p>
              <PostAuthor userId={data.userId} />
              <span>
                , created at: {data.currentDate ? data.currentDate : "Unknown"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
