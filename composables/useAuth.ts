import { werify } from "@werify/id-ts";

export const useAuth = async () => {
  const user = ref<User>({} as User);
  const auth = werify();
  auth.config.baseURL = "https://api.trader4.net";
  return { auth, user };
};
