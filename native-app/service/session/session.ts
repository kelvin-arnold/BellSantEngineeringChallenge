import AsyncStorage from "@react-native-async-storage/async-storage";
import { SessionData } from "../../types";

export const hasSession = async (): Promise<boolean> => {
  try {
    const session = await AsyncStorage.getItem("session");
    return !!session;
  } catch (error) {
    return false;
  }
};

export const saveSession = async (session: SessionData): Promise<boolean> => {
  try {
    await AsyncStorage.setItem("session", JSON.stringify(session));
    return true;
  } catch (error) {
    console.error("Error saving session:", error);
    return false;
  }
};

export const getSessionData = async (): Promise<SessionData | null> => {
  try {
    const session = await AsyncStorage.getItem("session");
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error("Error getting session data:", error);
    return null;
  }
};

export const clearSessionData = async (): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem("session");
    return true;
  } catch (error) {
    console.error("Error clearing session data:", error);
    return false;
  }
};
