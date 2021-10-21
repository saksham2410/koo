import { fetchData } from "../utils/fetchData";
import { FETCH_POSTS } from "../utils/endpoints";

export const fetchPostsService = async (page=1) => {
  try {
    const result = await fetchData(FETCH_POSTS(page));
    const nextPage = result.meta?.pagination?.page + 1;
    const hasNextPage = result.meta?.pagination.page<result.meta?.pagination.pages?true:false
    return { result, nextPage, hasNextPage };
  } catch (e) {
    throw e;
  }
};
