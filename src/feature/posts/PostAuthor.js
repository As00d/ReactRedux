import { useSelector } from "react-redux";

function PostAuthor({ userId }) {
  const usersList = useSelector((store) => store.user);
  const authorFound = usersList.find((user) => user.name === userId);

  return <span> - by {authorFound ? authorFound.name : "Unknown author"}</span>;
}

export default PostAuthor;
