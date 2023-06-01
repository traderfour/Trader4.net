import { apiTS } from "@traderfour/api-ts";
export const usePostsStore = () => {
  // const baseURL = useRuntimeConfig().public.baseUrl;
  const api = apiTS();
  const posts = useState("posts", () => []);

  // const addPost = () => {
  //   api.myTs.posts.store();
  // };

  const createPost = async (payload: any) => {
    const { data } = await useApi("/v1/my/posts", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };
  const getPosts = async () => {
    const { data } = await useApi("/v1/my/posts");
    console.log(data);
  };

  return { createPost, getPosts };
};
