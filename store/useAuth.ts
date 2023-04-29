import { werify } from "@werify/id-ts";

export const useAuth = async () => {
  const baseURL = useRuntimeConfig().public.baseUrl;

  const user = useState<User>();
  const auth = werify();
  auth.config.baseURL = baseURL;
  return { auth, user };
};
