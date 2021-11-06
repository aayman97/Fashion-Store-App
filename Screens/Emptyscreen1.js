import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

const Emptyscreen1 = () => {
  const [loaded] = useFonts({
    RegularFont: require("../assets/Fonts/ZenKakuGothicAntique-Regular.ttf"),
    BoldFont: require("../assets/Fonts/ZenKakuGothicAntique-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#B2EE32",
          fontSize: 30,
          fontFamily: "BoldFont",
        }}
      >
        Emptyscreen1
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Emptyscreen1;
