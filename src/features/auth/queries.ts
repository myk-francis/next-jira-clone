import { Account, Client } from "node-appwrite";
import { AUTH_COOKIE } from "./constants";
import { cookies } from "next/headers";

export const getCurrent = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = cookies().get(AUTH_COOKIE);

    if (!session) {
      return null;
    }

    client.setSession(session.value);

    if (!session) {
      return null;
    }

    const account = new Account(client);
    return await account.get();
  } catch {
    return null;
  }
};
