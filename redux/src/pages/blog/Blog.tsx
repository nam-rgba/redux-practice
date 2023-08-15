import PostList from "../../components/PostList";
import CreatePost from "../../components/createPost";

export default function Blog() {
  return (
    <div>
      <div className="">
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
}
