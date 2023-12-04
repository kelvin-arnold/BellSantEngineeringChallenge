import { StyleSheet, View } from "react-native";
import { LogPartFeature } from "../../features";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <LogPartFeature />
      {/* <View style={styles.separator} />
      <EditScreenInfo path='app/(tabs)/two.tsx' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
});
