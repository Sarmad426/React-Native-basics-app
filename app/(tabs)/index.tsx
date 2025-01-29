import { Image, StyleSheet, Platform, SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-white bg-indigo-500 p-3 text-2xl">
        Hi, this is Sarmad
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  textStyles: {
    color: "red",
    backgroundColor: "yellow",
    borderRadius: 8,
    padding: 10,
  },
});
