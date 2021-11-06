import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { useFonts } from "expo-font";
import { shopnowproducts } from "../data";

const ShopnowView = () => {
  const [loaded] = useFonts({
    RegularFont: require("../assets/Fonts/ZenKakuGothicAntique-Regular.ttf"),
    BoldFont: require("../assets/Fonts/ZenKakuGothicAntique-Bold.ttf"),
  });

  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ height: height * 0.45 }}>
      <View
        style={{
          width: width * 0.93,
          height: height * 0.37,
          backgroundColor: "transparent",
          borderRadius: 20,
          marginTop: height * 0.02,
          position: "relative",
          alignItems: "center",
        }}
      >
        <Animated.FlatList
          data={shopnowproducts}
          keyExtractor={(_, i) => i}
          horizontal
          snapToInterval={width * 0.93}
          decelerationRate={"fast"}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item, index }) => {
            return (
              <Animated.Image
                source={item.image}
                style={{
                  width: width * 0.93,
                  height: height * 0.37,
                  resizeMode: "cover",
                  borderRadius: 20,
                  borderWidth: 10,
                }}
              />
            );
          }}
        />

        <TouchableOpacity
          style={{
            width: "60%",
            height: "20%",
            borderRadius: "100%",
            backgroundColor: "#B2EE32",
            position: "absolute",
            top: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "BoldFont",
            }}
          >
            Shop Now
          </Text>
        </TouchableOpacity>

        <View
          style={{
            width: width * 0.6,
            height: "20%",
            backgroundColor: "transparent",
            top: "70%",
            borderRadius: 20,
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {shopnowproducts.map((item, index) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];

            const scaleXAnimation = scrollX.interpolate({
              inputRange,
              outputRange: [0.7, 1, 0.7],
              extrapolate: "clamp",
            });
            const colorAnimation = scrollX.interpolate({
              inputRange,
              outputRange: ["black", "white", "black"],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                style={{
                  width: "20%",
                  height: "10%",
                  backgroundColor: colorAnimation,
                  borderRadius: 20,
                  marginHorizontal: 2,
                  transform: [
                    {
                      scaleX: scaleXAnimation,
                    },
                  ],
                }}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default ShopnowView;
