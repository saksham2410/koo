import { useState, useEffect } from "react";

const useInfiniteScroll = (callback, isFetching) => {
  const [fetching, setIsFetching] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!fetching) return;
    callback();
  }, [fetching]);

  const handleScroll = () => {
    console.log(
      window.innerHeight + document.documentElement.scrollTop,
      document.documentElement.offsetHeight,
      fetching
    );
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      fetching
    )
      return;
    setIsFetching(true);
  };

  return [fetching, setIsFetching];
};

export default useInfiniteScroll;
