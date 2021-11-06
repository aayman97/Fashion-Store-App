import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import Header from "../Components/Header";
import { useFonts } from "expo-font";
import Banner from "../Components/Banner";
import ShopnowView from "../Components/ShopnowView";
import ProductCard from "../Components/ProductCard";

import { productslist } from "../data";
const Homescreen = () => {
  const [loaded] = useFonts({
    RegularFont: require("../assets/Fonts/ZenKakuGothicAntique-Regular.ttf"),
    BoldFont: require("../assets/Fonts/ZenKakuGothicAntique-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Banner />
        <ShopnowView />
        <Text
          style={{
            fontSize: 25,
            fontFamily: "BoldFont",
            color: "white",
            alignSelf: "flex-start",
            paddingHorizontal: height * 0.02,
          }}
        >
          Top Sales{" "}
        </Text>

        {/* <ProductCard ProductName={"Leather Jacket"} ProductPrice={2.28} /> */}

        <View style={{ flexDirection: "row" }}>
          {console.log("................")}
          <View
            style={{
              width: "50%",
              alignItems: "center",
            }}
          >
            {productslist
              .filter((item, index) => index % 2 === 0)
              .map((item, index) => {
                return (
                  <ProductCard
                    ProductName={item.name}
                    ProductPrice={item.price}
                    image={item.image}
                  />
                );
              })}
          </View>

          <View
            style={{
              width: "50%",
              alignItems: "center",
            }}
          >
            {productslist
              .filter((item, index) => index % 2 !== 0)
              .map((item, index) => {
                return (
                  <ProductCard
                    ProductName={item.name}
                    ProductPrice={item.price}
                    image={item.image}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Homescreen;
