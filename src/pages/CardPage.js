import React from "react";
import { useInfiniteQuery } from "react-query";
import { fetchPostsService } from "../services/fetchPosts";
import Card from "../components/Card/index";
import useIntersectionObserver from "../hooks/useInteractionObserver";

const CardPage = () => {
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "posts",
    ({ pageParam }) => fetchPostsService(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.nextPage : false,
    }
  );

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <div>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data?.pages?.map((post, index) => (
            <Card key={index} posts={post?.result?.data} />
          ))}
          <button
            ref={loadMoreButtonRef}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </>
      )}
    </div>
  );
};

export default CardPage;
