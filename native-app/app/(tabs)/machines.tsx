import { StyleSheet, View } from "react-native";
import { MachinesFeature } from "./../../features";

export default function StateScreen() {
  return (
    <View style={styles.container}>
      <MachinesFeature />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
