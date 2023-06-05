export const useMyStore = () => {
  const loading = ref(false);

  const createItem = async (route: string, payload: any) => {
    return await useApi(route, {
      method: "post",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  return { createItem, loading };
};
