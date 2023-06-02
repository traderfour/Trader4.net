// import { apiTS } from "@traderfour/api-ts";
export const usePostsStore = () => {
  // const baseURL = useRuntimeConfig().public.baseUrl;
  // const api = apiTS();
  // const posts = useState("posts", () => []);

  // const addPost = () => {
  //   api.myTs.posts.store();
  // };

  const loading = ref(true);
  const posts = ref([]);
  const metas = ref({});

  const createPost = async (payload: any) => {
    return await useApi("/v1/my/posts", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const getPosts = async () => {
    return await useApi("/v1/posts");
  };

  const getMyPosts = async (page?: number) => {
    loading.value = true;
    await useApi(`/v1/my/posts${page ? "?page=" + page : ""}`, {
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
    }).then((res) => {
      const response = res as IApiResponse;
      loading.value = false;
      posts.value = response.results;
      metas.value = response.metas;
    });
  };

  return { createPost, getPosts, getMyPosts, posts, loading, metas };
};
