import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { productslist } from "../data";
import ProductCard from "../Components/ProductCard";
const Productsscreen = () => {
  const [loaded] = useFonts({
    RegularFont: require("../assets/Fonts/ZenKakuGothicAntique-Regular.ttf"),
    BoldFont: require("../assets/Fonts/ZenKakuGothicAntique-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  function Header() {
    return (
      <View
        style={{
          width,
          height: height * 0.08,
          marginTop: height * 0.04,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: height * 0.02,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: height * 0.06,
            height: height * 0.06,
            borderRadius: "100%",
            backgroundColor: "transparent",
          }}
        ></View>
        <Text style={{ color: "white", fontSize: 25, fontFamily: "BoldFont" }}>
          Top sales
        </Text>
        <TouchableOpacity
          style={{
            width: height * 0.06,
            height: height * 0.06,
            backgroundColor: "transparent",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="shopping-bag" size={30} color="white" />
          <View
            style={{
              width: height * 0.02,
              height: height * 0.02,
              borderRadius: "100%",
              backgroundColor: "#B2EE32",
              position: "absolute",
              bottom: "55%",
              left: "85%",
              borderWidth: 1,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function SortByButtons() {
    return (
      <TouchableOpacity
        style={{
          width: width * 0.3,
          height: height * 0.04,
          borderRadius: "100%",
          backgroundColor: "#B2EE32",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: width * 0.02,
        }}
      >
        <MaterialIcons name="sort" size={25} color="black" />
        <Text
          style={{
            fontSize: 16,
            fontFamily: "BoldFont",
            lineHeight: 20,
          }}
        >
          Sort by
        </Text>
      </TouchableOpacity>
    );
  }
  function RestButtons({ name, active }) {
    return (
      <TouchableOpacity
        style={{
          width: width * 0.22,
          height: height * 0.04,
          borderRadius: "100%",
          backgroundColor: active ? "black" : "#242424",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: width * 0,
          marginLeft: width * 0.05,
        }}
      >
        <Text
          style={{
            fontSize: name.length > 5 ? 14 : 16,
            fontFamily: "BoldFont",
            lineHeight: 20,
            color: active ? "#B2EE32" : "white",
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: width * 0.04,
          marginTop: height * 0.03,
          height: height * 0.08,
        }}
      >
        <SortByButtons />
        <RestButtons name={"Shoes"} />
        <RestButtons name={"FW 2021"} active />
        <RestButtons name={"Newwest"} />
      </ScrollView>

      <ScrollView style={{ marginTop: height * 0.005 }}>
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
                  <View style={{ marginTop: height * 0.02 }}>
                    <ProductCard
                      ProductName={item.name}
                      ProductPrice={item.price}
                      image={item.image}
                      active={index === 0 ? true : false}
                    />
                  </View>
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
    alignItems: "center",
  },
});

export default Productsscreen;
