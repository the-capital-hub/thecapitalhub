import { useEffect } from "react";
import "./WriteBlog.scss";
import ComingSoon from "../../../components/ComingSoon/ComingSoon";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";

function WriteBlog() {
  useEffect(() => {
    document.title = "Write a blog | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="write-blog_container">
        <ComingSoon />
      </div>
    </MaxWidthWrapper>
  );
}

export default WriteBlog;
