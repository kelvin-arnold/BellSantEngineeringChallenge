import React, { useContext } from "react";
import { SplashScreen, router } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import useSession from "../hooks/useSession";
import { MachineContext } from "../context/MachineContext";

const AppContainer: React.FC = () => {
  const { userSession, isLoading } = useSession();

  SplashScreen.preventAutoHideAsync();

  React.useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
      if (!userSession) {
        router.replace("/auth/");
      } else {
        router.replace("/(tabs)/machines");
      }
    }
  }, [isLoading]);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={24} />
      ) : (
        <View>
          <Text>Redirecting...</Text>
        </View>
      )}
    </View>
  );
};

export default AppContainer;
