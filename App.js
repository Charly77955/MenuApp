import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.AppBody}>
      <Text style={styles.AppText}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    flex: 1,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  AppText: {
    color: "white",
  },
});
