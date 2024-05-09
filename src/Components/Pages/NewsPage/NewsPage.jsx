import { useEffect } from "react";
import News from "../../common/News/News";

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <News />;
}
