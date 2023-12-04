import { Platform } from "react-native";

const API_BASE_URL =
  "https://fancy-dolphin-65b07b.netlify.app/api/machine-health";

const LOCAL_API_URL = `http://${
  Platform?.OS === "android" ? "10.0.2.2" : "localhost"
}:3001/machine-health`;

export const getApiUrl = () => {
  return __DEV__ ? LOCAL_API_URL : API_BASE_URL;
};
