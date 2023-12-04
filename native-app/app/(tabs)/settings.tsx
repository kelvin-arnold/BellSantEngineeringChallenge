import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import useSession from "../../hooks/useSession";
import { router } from "expo-router";
import { set } from "react-hook-form";
import { MachineContext } from "../../context/MachineContext";

const SettingsPage: React.FC = () => {
  const { clearSession } = useSession();
  const { clearMachineData } = useContext(MachineContext);
  const [loading, setLoading] = useState(false);

  const removeSession = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      clearMachineData();
      clearSession().then(() => {
        router.replace("/auth/");
      });
    }, 2000);
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <View>
        <Button onPress={removeSession} loading={loading}>
          Remove session
        </Button>
      </View>
    </View>
  );
};

export default SettingsPage;
