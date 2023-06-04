export const useMyStore = (endpoint: string) => {
  const loading = ref(false);
  const data = ref();

  const create = async (payload: any) => {
    console.log(payload);

    return await useApi(endpoint, {
      headers: {
        method: "post",
        // @ts-ignore
        Authorization: useCookie("user").value.access_token,
        body: JSON.stringify(payload),
      },
    });
  };

  return { create, loading };
};
