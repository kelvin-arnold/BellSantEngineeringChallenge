import { useState, useEffect } from "react";
import {
  hasSession,
  getSessionData,
  clearSessionData,
} from "./../service/session/session";
import { SessionData } from "../types";

const useSession = () => {
  const [userSession, setUserSession] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkSession = async () => {
    const sessionExists = await hasSession();
    if (sessionExists) {
      const session = await getSessionData();
      setUserSession(session);
    }
    hasSession()
      .then((session) => {
        console.log("checkSession", session);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    checkSession();
  }, []);

  const clearSession = async () => {
    return await clearSessionData();
  };

  return {
    userSession,
    isLoading,
    clearSession,
  };
};

export default useSession;
