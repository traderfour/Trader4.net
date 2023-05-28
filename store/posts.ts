import { apiTS } from "@traderfour/api-ts";
export const usePostsStore = () => {
  const baseURL = useRuntimeConfig().public.baseUrl;

  const createPost = async (payload: any) => {
    const { data } = await useApi("/v1/my/posts", {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
    console.log(data);
  };

  return { createPost };
};
