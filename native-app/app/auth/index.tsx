import React from "react";
import { View, Text } from "react-native";
import { AuthFeature } from "./../../features";

const AuthPage: React.FC = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <AuthFeature />
    </View>
  );
};

export default AuthPage;
