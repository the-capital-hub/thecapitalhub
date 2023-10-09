import { useEffect } from "react";
import "./WriteBlog.scss";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";

function WriteBlog() {
  useEffect(() => {
    document.title = "Write a blog | The Capital Hub";
  }, []);
  return (
    <div className="container write-blog_container">
      <ComingSoon />
    </div>
  );
}

export default WriteBlog;
