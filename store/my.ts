export const useMyStore = (endpoint: string) => {
  const loading = ref(false);

  const create = async (payload: any) => {
    console.log(payload, "From Store");
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
