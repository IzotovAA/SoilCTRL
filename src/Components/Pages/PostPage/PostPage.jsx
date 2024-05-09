import { useEffect } from "react";
import Post from "../../common/Post/Post";

export default function PostPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Post />;
}
