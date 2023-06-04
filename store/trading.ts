import { getToken } from "~/composables/JwtService";

export const useTradingStore = () => {
  interface Resoponse {
    message: string;
    metas: string[];
    results: any;
    succeed: boolean;
  }

  //states

  //getters

  //actions
  const createTradingAccount = async (payload: TradingAcoounts) => {
    return await useApi("/v1/my/trading/accounts", {
      method: "POST",

      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  return { createTradingAccount };
};
