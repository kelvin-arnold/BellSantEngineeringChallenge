import { useState } from "react";
import { signIn, signOut, getCurrentUser } from "../service/serviceAuth";
import { User, Error } from "../../../types";
import { handleError } from "../../../utils/errorHandling";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async (username: string, password: string) => {
    setError(null);
    try {
      setLoading(true);
      console.log("handleSignIn -> username: ", username);
      const userSession = await signIn(username, password);
      console.log("userSession: ", userSession);
      if (userSession) {
        setUser(userSession);
      } else {
        setError({ messsage: "User not found" });
      }
    } catch (error) {
      setError({
        messsage: handleError(error),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOut();
      setUser(null);
    } catch (error) {
      setError({
        messsage: handleError(error),
      });
    } finally {
      setLoading(false);
    }
  };

  const getUserSession = async () => {
    try {
      setLoading(true);
      const userSession = await getCurrentUser();
      setUser(userSession);
    } catch (error) {
      setError({
        messsage: handleError(error),
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    error,
    loading,
    signIn: handleSignIn,
    signOut: handleSignOut,
    getUserSession,
  };
};

export default useAuth;
