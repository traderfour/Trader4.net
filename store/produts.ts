export const useProductStore = () => {
  interface Resoponse {
    message: string;
    metas: string[];
    results: any;
    succeed: boolean;
  }

  //states
  const categories = useState<ICategory[]>("categories", () => []);
  const markets = useState<IMarkets[]>("markets", () => []);
  const platforms = useState<any>("platforms", () => []);

  //getters

  //actions
  const fetchCategories = async () => {
    const { data }: { data: any } = await useApi("/v1/categories");
    categories.value = data?.results as ICategory[];
    console.log("categories", categories.value);
  };
  const fetchMarkets = async () => {
    const { data }: { data: any } = await useApi("/v1/market/markets");
    markets.value = data?.results as IMarkets[];
    console.log("markets", markets.value);
  };
  const fetchPlatforms = async () => {
    const { data }: { data: any } = await useApi("/v1/market/platforms");
    platforms.value = data?.results as any;
    console.log("platforms", platforms.value);
  };

  return {
    categories,
    fetchCategories,
    markets,
    fetchMarkets,
    fetchPlatforms,
  };
};
