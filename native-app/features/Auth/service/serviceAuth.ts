import { User } from "../../../types";
import uuid from "react-native-uuid";
import * as serviceStorageSession from "./../../../service/session/session";

const users: User[] = [
  { id: "1", username: "user1", password: "123" },
  { id: "2", username: "user2", password: "123" },
  { id: "3", username: "user3", password: "123" },
];

const findUser = (username: string, password: string) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

export const signIn = async (
  username: string,
  password: string
): Promise<User | null> => {
  const user = findUser(username, password);
  console.log("user:", user);
  if (user) {
    serviceStorageSession.saveSession({
      id: uuid.v4().toString(),
      date: new Date().toISOString(),
      user,
    });
    return user;
  } else {
    return null;
  }
};

export const signOut = async () => {
  await serviceStorageSession.clearSessionData();
  return true;
};

export const getCurrentUser = async (): Promise<User | null> => {
  const session = await serviceStorageSession.getSessionData();
  return session ? session.user : null;
};
