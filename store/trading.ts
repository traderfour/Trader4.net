import { getToken } from "~/composables/JwtService";

export const useTradingStore = () => {
  interface Resoponse {
    message: string;
    metas: string[];
    results: any;
    succeed: boolean;
  }

  //states

  const tradingAccounts = useState<ITradingAccounts[]>(
    "tradingAccount",
    () => []
  );

  //getters

  //actions

  // const fetchTradingAccounts = async () => {
  //   const { data }: { data: any } = await useApi("/v1/my/trading/accounts");
  //   tradingAccounts.value = data.results as ITradingAccounts[];
  // };
  const fetchTradingAccounts = async (payload: ITradingAccounts) => {
    return await useApi("/v1/my/trading/accounts", {
      method: "get",
      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
    });
  };

  const createTradingAccount = async (payload: ITradingAccounts) => {
    return await useApi("/v1/my/trading/accounts", {
      method: "POST",

      // @ts-ignore
      headers: { Authorization: useCookie("user").value.access_token },
      body: JSON.stringify(payload),
    });
  };

  return { createTradingAccount, fetchTradingAccounts, tradingAccounts };
};
