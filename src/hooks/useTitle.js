import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Doctors Planet`;
  }, [title]);
};

export default useTitle;

