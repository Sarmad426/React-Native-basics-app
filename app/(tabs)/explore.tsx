import { StyleSheet, Image, Platform, SafeAreaView, Text } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <Text className="text-white bg-indigo-500 p-3 text-2xl">
        Hi, on explore page
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
