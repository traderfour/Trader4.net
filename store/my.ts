export const useMyStore = () => {
  const { $toast } = useNuxtApp();
  const list = ref<IPosts>();
  const loading = ref<boolean>(false);

  const createItem = async (route: string, payload: any) => {
    return await useApi(route, {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  const getList = async (route: string) => {
    loading.value = true;
    await useApi(route)
      .then((res) => {
        const response = res.data as IApiResponse;
        loading.value = false;
        list.value = response.results;
      })
      .catch((err) => {
        loading.value = false;
        console.log(err.data.message, "err");
        $toast.error(err.data.message, { position: "top-right" });
      });
  };

  return { createItem, getList, list, loading };
};
