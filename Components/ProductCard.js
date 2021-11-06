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
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { useFonts } from "expo-font";

const ProductCard = ({ ProductName, ProductPrice, image, active }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: width * 0.42,
          height: height * 0.3,
          borderRadius: 20,
          backgroundColor: "black",
          overflow: "hidden",
          justifyContent: "space-evenly",
          marginVertical: height * 0.015,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "75%",
            backgroundColor: "white",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <TouchableOpacity
            style={{
              left: "78%",
              top: "4%",
              zIndex: 100,
              position: "absolute",
            }}
          >
            {active ? (
              <Ionicons name="ios-heart" size={30} color="black" />
            ) : (
              <Feather name="heart" size={24} color="black" />
            )}
          </TouchableOpacity>
          <Image
            source={image}
            style={{
              resizeMode: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "RegularFont",
            letterSpacing: 2,
          }}
        >
          {ProductName}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "BoldFont",
            letterSpacing: 3,
          }}
        >
          ${ProductPrice}0
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
